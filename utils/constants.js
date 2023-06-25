"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEXT_PUBLIC_SUPABASE_ANON_KEY = exports.NEXT_PUBLIC_SUPABASE_URL = void 0;
const docker_1 = require("@chatbot-ui/core/utils/docker");
exports.NEXT_PUBLIC_SUPABASE_URL = (0, docker_1.dockerEnvVarFix)(process.env.NEXT_PUBLIC_SUPABASE_URL) || '';
exports.NEXT_PUBLIC_SUPABASE_ANON_KEY = (0, docker_1.dockerEnvVarFix)(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) || '';
