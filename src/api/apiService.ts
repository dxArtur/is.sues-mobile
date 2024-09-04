export interface IssueData {
    title: string;
    description: string;
    departmentId: string;
    authorId?: string;
  }
  
  
  export async function CreateIssue(issueData: IssueData): Promise<any> {
    const response = await fetch('https://api.exemplo.com/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueData),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao criar a issue');
    }
  
    return await response.json();
  }
