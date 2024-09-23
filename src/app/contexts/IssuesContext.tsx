import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getIssues } from '../../api/issues'
import { Issue } from '../../dtos/IssueDTO'
import { useAuth } from '../hooks/useAuth'
import { getMyIssues } from '@/src/api/apiUser'

type IssuesContextData = {
    issues: Issue[];
    myIssues: Issue[];
    loadMyIssues: () => Promise<void>
    loadIssues: () => Promise<void>
}

export const IssuesContext = createContext<IssuesContextData|undefined>(undefined)

type IssuesProviderProps = {
    children: ReactNode;
}

export const IssuesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {user} = useAuth()
    const [issues, setIssues] = useState<Issue[]>([])
    const [myIssues, setMyIssues] = useState<Issue[]>([])

    
    
    const loadIssues = async () => {
        try {
            const issues = await getIssues()
            setIssues(issues)
        } catch (error) {
            throw error
        }
    }

    const loadMyIssues = async () => {
        try {
            const issues = await getMyIssues(user?.id!)
            setMyIssues(issues!)
        } catch (error) {
            throw error
        }
    }
    
    
    useEffect(() => {
        loadIssues()
        loadMyIssues()
    }, [])


    return (
        <IssuesContext.Provider value={{issues, myIssues, loadMyIssues, loadIssues}}>
            {children}
        </IssuesContext.Provider>
    )
}


export const useIssues = () => {
    const context = useContext(IssuesContext);
    if (!context) {
        throw new Error('useIssues must be used within an IssuesProvider');
    }
    return context;
};