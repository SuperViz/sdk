import { z } from 'zod';

export const PresenceSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Presence = z.infer<typeof PresenceSchema>;
