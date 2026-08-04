import { PrismaService } from '../src/prisma/prisma.service';

// Every e2e spec's beforeEach should call this — not just delete the
// tables that one file happens to care about. All e2e specs share one
// real Postgres `test` schema across the whole run (each file boots its
// own app, but not its own database), so a spec that only knows about its
// own tables will hit FK-constraint failures on another file's leftover
// data. One shared, FK-ordered reset keeps every spec file in sync
// automatically as new tables get added, instead of N copies of this list
// silently drifting out of date.
//
// This alone isn't sufficient once there's more than one e2e spec file,
// though: Jest runs different spec *files* in parallel worker processes by
// default, and since they share this one real database, one file's
// beforeEach can wipe rows out from under another file's in-flight test.
// That's why test:e2e passes --runInBand — forces every e2e file to run
// serially, so only one file's reset cycle is ever active at a time.
export async function resetDatabase(prisma: PrismaService): Promise<void> {
  await prisma.exerciseEvent.deleteMany();
  await prisma.wordProgress.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.word.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.user.deleteMany();
}
