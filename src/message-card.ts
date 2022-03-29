export function createMessageCard(
  notificationSummary: string,
  notificationColor: string,
  runNum: string,
  runId: string,
  repoName: string,
  sha: string,
  repoUrl: string,
  timestamp: string,
  notificationText?: string | null
): any {
  const messageCard = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: notificationSummary,
    themeColor: notificationColor,
    title: notificationSummary,
    sections: [
      {
        activityText: notificationText
      },
      {
        activityTitle: `**#${runNum}** on [${repoName}](${repoUrl})`
      }
    ],
    potentialAction: [
      {
        '@context': 'http://schema.org',
        target: [`${repoUrl}/actions/runs/${runId}`],
        '@type': 'ViewAction',
        name: 'View Workflow Run'
      }
    ]
  }

  return messageCard
}
