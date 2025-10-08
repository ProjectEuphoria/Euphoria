declare module '@fastify/static' {
  import { FastifyPluginCallback } from 'fastify';
  const plugin: FastifyPluginCallback<{
    root: string | string[];
    prefix?: string;
    index?: string | string[] | false;
    decorateReply?: boolean; // default: true -> adds reply.sendFile
  }>;
  export default plugin;
}
declare module '@fastify/cors';