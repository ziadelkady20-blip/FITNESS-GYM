const OWNER='ziadelkady20-blip', REPO='FITNESS-GYM', BRANCH='main', DATA_PATH='data/site-data.json';
const ghHeaders=()=>({Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28','User-Agent':'fitness-gym-admin'});
async function gh(path,options={}){const r=await fetch(`https://api.github.com/repos/${OWNER}/${REPO}${path}`,{...options,headers:{...ghHeaders(),...(options.headers||{})}});if(!r.ok){const t=await r.text();throw new Error(`GitHub ${r.status}: ${t.slice(0,220)}`)}return r.status===204?null:r.json()}
async function getData(){const r=await gh(`/contents/${DATA_PATH}?ref=${BRANCH}`);return {data:JSON.parse(Buffer.from(r.content,'base64').toString('utf8')),sha:r.sha}}
export default async function handler(req,res){res.setHeader('Cache-Control','no-store');try{const {data}=await getData();res.status(200).json(data)}catch(e){res.status(500).json({error:e.message})}}
