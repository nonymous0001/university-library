import {Client as WorkflowClient} from "@upstash/workflow";

import config from "@/lib/config"
export const  WorkflowClient=new WorkflowClient({
    baseUrl: config.env.upstash.qstashUrl,
    token: config.env.upstash.qstashToken
});