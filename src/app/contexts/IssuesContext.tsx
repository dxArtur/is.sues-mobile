// import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useRouter } from 'expo-router'
// import { getIssues } from '../../api/issues'
// import { Issue } from '../../dtos/IssueDTO'

// type IssuesContextData = {
//     issues: Issue[];
//     loadIssues: () => Promise<void>
// }

// export const IssuesContext = createContext<IssuesContextData|undefined>(undefined)

// type IssuesProviderProps = {
//     children: ReactNode;
// }

// export const IssuesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [issues, setIssues] = useState<Issue[]>([])

    
    
//     const loadIssues = async () => {
//         try {
//             const issues = await getIssues()
//             setIssues(issues)
//         } catch (error) {
//             throw error
//         }
//     }
    
    
//     useEffect(() => {
//         loadIssues()
//     }, [])


//     return (
//         <IssuesContext.Provider value={{issues, loadIssues}}>
//             {children}
//         </IssuesContext.Provider>
//     )
// }


// export const useIssues = () => {
//     const context = useContext(IssuesContext);
//     if (!context) {
//         throw new Error('useIssues must be used within an IssuesProvider');
//     }
//     return context;
// };