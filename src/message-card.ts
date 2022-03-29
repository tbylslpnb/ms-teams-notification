export function createMessageCard(
  notificationSummary: string,
  notificationColor: string,
  runNum: string,
  runId: string,
  repoName: string,
  sha: string,
  repoUrl: string,
  timestamp: string,
  releaseTitle: string | null,
  releaseMessage?: string | null
): any {
  let avatar_url =
    'https://www.gravatar.com/avatar/05b6d8cc7c662bf81e01b39254f88a48?d=identicon'

  const messageCard = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: notificationSummary,
    themeColor: notificationColor,
    title: notificationSummary,
    sections: [
      {
        activityTitle: releaseTitle,
        activityText: releaseMessage
      },
      {
        activityTitle: `**CI #${runNum} (commit ${sha.substr(
          0,
          7
        )})** on [${repoName}](${repoUrl})`,
        activityImage: avatar_url,
        activitySubtitle: ``
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
