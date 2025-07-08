import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Sample entities
  const apple = await prisma.entity.upsert({
    where: { name: 'Apple' },
    update: {},
    create: {
      name: 'Apple',
      type: 'company',
      description: 'Consumer electronics',
    },
  });

  const samsung = await prisma.entity.upsert({
    where: { name: 'Samsung' },
    update: {},
    create: {
      name: 'Samsung',
      type: 'company',
      description: 'Electronics conglomerate',
    },
  });

  // Sample comparative insight
  await prisma.comparativeInsight.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Battery life comparison',
      description: 'Apple devices generally have longer battery life than Samsung.',
      primaryEntityId: apple.id,
      competitorEntityId: samsung.id,
    },
  });

  // Sample missions
  await prisma.mission.createMany({
    data: [
      {
        title: 'Connect Salesforce CRM',
        description: 'Sync opportunity data for deal insights',
        integration: 'salesforce',
      },
      {
        title: 'Enable Slack Digest',
        description: 'Receive daily competitive summaries in Slack',
        integration: 'slack',
      },
      {
        title: 'Upload Battlecards',
        description: 'Import existing competitive content to enrich analysis',
        integration: 'battlecards',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 