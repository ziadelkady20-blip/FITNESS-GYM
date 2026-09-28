const OWNER='ziadelkady20-blip';
const REPO='FITNESS-GYM';
const BRANCH='main';
const DATA_PATH='data/site-data.json';

export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma','no-cache');
  res.setHeader('Expires','0');
  try{
    const url=`https://api.github.com/repos/${OWNER}/${REPO}/contents/${DATA_PATH}?ref=${BRANCH}&_=${Date.now()}`;
    const r=await fetch(url,{cache:'no-store',headers:{
      Accept:'application/vnd.github+json',
      'X-GitHub-Api-Version':'2022-11-28',
      'User-Agent':'fitness-gym-public-site',
      'Cache-Control':'no-cache'
    }});
    if(!r.ok)throw new Error(`Data source returned ${r.status}`);
    const file=await r.json();
    if(!file.content)throw new Error('Data source returned no content');
    const data=JSON.parse(Buffer.from(file.content.replace(/\n/g,''),'base64').toString('utf8'));
    res.status(200).json(data);
  }catch(e){
    console.error('site-data error',e);
    res.status(500).json({error:e.message});
  }
}
