self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
self.addEventListener('message',e=>{
  if(e.data?.type==='NOTIFY'){
    self.registration.showNotification(e.data.title,{body:e.data.body,icon:'icon.svg',badge:'icon.svg'});
  }
});