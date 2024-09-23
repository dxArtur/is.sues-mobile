export type Issue = {
    id: string;
    title: string;
    description: string;
    status: boolean;
    isAssigned: boolean;
    authorId: string;
    createdAt: string;
    assignedUserId?: String | null;

}