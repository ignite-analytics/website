//Listner for modal
(function(){
    function MeetingEmbed(){function t(t){return t.querySelectorAll("iframe").length>0}function n(){return"&parentPageUrl="+window.location.origin+window.location.pathname}function e(t){var n=null;if(document.cookie&&""!==document.cookie)for(var e=document.cookie.split(";"),o=0;o<e.length;o++){var r=e[o].trim(),i=t+"=";if(r.substring(0,t.length+1)===i){n=r.substring(t.length+1);break}}return n}function o(t){return t?"&parentHubspotUtk="+t:""}function r(){var t=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(n){var e=(t+16*Math.random())%16|0;t=Math.floor(t/16);return("x"===n?e:3&e|8).toString(16)})}function i(){var t=window.crypto||window.msCrypto,n=new Uint16Array(8);t.getRandomValues(n);var e=function(t){for(var n=t.toString(16);n.length<4;)n="0"+n;return n};return e(n[0])+e(n[1])+e(n[2])+e(n[3])+e(n[4])+e(n[5])+e(n[6])+e(n[7])}function a(){var t=window.crypto||window.msCrypto;return void 0!==t&&void 0!==t.getRandomValues&&void 0!==window.Uint16Array?i():r()}function s(){var t=window.__hsUserToken||e("hubspotutk");if(!t){var n=a();t=n;window.__hsUserToken=n}return t}function u(t){return["https://local.hubspot.com","https://local.hubspotqa.com","https://app.hubspotqa.com","https://app.hubspot.com","https://meetings.hubspot.com","https://meetings.hubspotqa.com"].indexOf(t)>-1}var c,h=document.querySelectorAll(".meetings-iframe-container");for(c=0;c<h.length;c++){var x=h[c],l=x.dataset.src,p=document.createElement("iframe"),d=s();x.height="100%";p.src=l+o(d)+n();p.width="100%";p.style.minWidth="312px";p.style.minHeight="516px";p.style.height="756px";p.style.border="none";if(!t(x)){x.appendChild(p);window.addEventListener("message",m)}function m(t){var n=t[t.message?"message":"data"];u(t.origin)&&n.height&&(p.style.height=n.height+"px")}}};
    $(document).ready(function(){
    document.querySelectorAll('.modal').forEach(m => {
        let id = m.getAttribute('id')
        $(`#${id}`).on('shown.bs.modal', (e) =>{
            let t = e.target;
            let fId = t.getAttribute('formId'),
                content = t.getAttribute('content'),
                targetId = t.getAttribute('targetId'),
                portalId = t.getAttribute('portalId');
            if(document.querySelector(`#${targetId}`).innerHTML !== "") return;
            console.log(t.getAttribute('content'))
            if(t.getAttribute('content') !== null){
                document.querySelector(`#${targetId}`).innerHTML = content;
                if(t.getAttribute('hubspot') === "true") MeetingEmbed();
            }else{
                if(typeof hbspt.forms.create === "function"){
                    hbspt.forms.create({
                        portalId: portalId,
                        target: `#${targetId}`,
                        formId: fId
                    });
                }
            }
            $(this).off('show.bs.modal');
        })
    })
    })
})()