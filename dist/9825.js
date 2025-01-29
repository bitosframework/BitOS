"use strict";(self.webpackChunk_BitOS_core_kernel=self.webpackChunk_BitOS_core_kernel||[]).push([[9825],{52390:(r,n,A)=>{A.d(n,{Z:()=>p});var e=A(62568),o=A.n(e),t=A(68802),s=A.n(t),i=A(33686),a=A.n(i),d=new URL(A(45277),A.b),E=s()(o());E.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,700&display=swap);"]);var C=a()(d);E.push([r.id,"#BitOS-desktop {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100%;\r\n  background-color: #121212;\r\n}\r\n\r\n#BitOS-desktop-wallpaper {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#BitOS-desktop-wallpaper.transition {\r\n  transition: opacity 2.5s;\r\n}\r\n\r\n#BitOS-desktop-menu-button {\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 1rem;\r\n  padding: 0.5rem;\r\n  background: green;\r\n  border-radius: 50%;\r\n  transition: transform 0.5s, background-color 0.25s;\r\n}\r\n\r\n/* #BitOS-desktop-menu-button:hover { */\r\n.BitOS-desktop-menu-button-hover {\r\n  cursor: pointer;\r\n  transform: rotate(45deg);\r\n  background-color: darkgreen;\r\n}\r\n\r\n#BitOS-desktop-shell-button {\r\n  opacity: 0;\r\n  color: green;\r\n  font-size: 2.5rem;\r\n  position: absolute;\r\n  bottom: 3em;\r\n  right: 1rem;\r\n  padding: 0.5rem;\r\n  background: #121212;\r\n  border-radius: 50%;\r\n  transition: transform 0.5s, background-color 0.25s, opacity 1s;\r\n}\r\n\r\n#BitOS-desktop-shell-button:hover {\r\n  cursor: pointer;\r\n  transform: rotate(45deg);\r\n  background-color: #080808;\r\n}\r\n\r\n#BitOS-desktop-exit-button {\r\n  opacity: 0;\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 2.5em;\r\n  padding: 0.5rem;\r\n  background: rgb(45, 18, 71);\r\n  border-radius: 50%;\r\n  transition: transform 0.5s, background-color 0.25s, opacity 1s;\r\n}\r\n\r\n#BitOS-desktop-exit-button:hover {\r\n  cursor: pointer;\r\n  transform: rotate(45deg);\r\n  background-color: #500f4a;\r\n}\r\n\r\n#BitOS-desktop-exit-button, #BitOS-desktop-menu-button, #BitOS-desktop-shell-button {\r\n  user-select: none;\r\n}\r\n\r\n.BitOS-desktop-launcher-window {\r\n  background: #121212;\r\n}\r\n\r\n.BitOS-desktop-launcher-window *:not(.wb-icon, .wb-max, .wb-close) {\r\n  cursor: url("+C+"), crosshair;\r\n}\r\n\r\n.BitOS-desktop-launcher-window, .BitOS-desktop-launcher-window .wb-body {\r\n  background-color: transparent;\r\n  border-bottom-left-radius: 40px;\r\n  border-bottom-right-radius: 40px;\r\n}\r\n\r\n.BitOS-desktop-launcher-window .wb-header .wb-title {\r\n  font-family: 'Kanit', sans-serif;\r\n  font-variant: small-caps;\r\n  text-shadow: 3px 3px 2px rgb(145, 145, 145);\r\n  font-size: 2rem;\r\n  text-decoration: #357C3C wavy underline;\r\n  text-decoration-thickness: 2px;\r\n}\r\n\r\n#BitOS-desktop-launcher {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin: 2rem;\r\n  z-index: 100;\r\n  position: relative;\r\n  perspective: 10;\r\n}\r\n\r\n#BitOS-desktop-launcher-wallpaper {\r\n  /* opacity: 0; */\r\n  background-color: #121212;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-size: cover;\r\n\r\n  animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n  from {opacity: 0}\r\n  to {opacity: 1}\r\n}\r\n\r\n.BitOS-desktop-launcher-entry {\r\n  width: 128px;\r\n  height: 128px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  padding: 1.25rem;\r\n  border-radius: 25px;\r\n  color: white;\r\n  background-color: rgba(7, 7, 7, 0.7);\r\n  transition: transform 0.5s;\r\n  overflow: hidden;\r\n  word-break: break-all;\r\n}\r\n\r\n.BitOS-desktop-launcher-entry:hover {\r\n  transform: scale(1.15);\r\n  /* cursor: pointer; */\r\n}\r\n\r\n.BitOS-desktop-launcher-entry h1 {\r\n  font-size: 1em;\r\n}\r\n\r\n.BitOS-desktop-launcher-entry img {\r\n  width: 64px;\r\n  margin: auto;\r\n  /* temporary hack; famous last words */\r\n  filter: invert(1);\r\n}\r\n\r\n#BitOS-desktop-runner {\r\n  display: flex;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  padding: 1rem;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #121212;\r\n  width: 60%;\r\n  height: 120px;\r\n  border-radius: 10px;\r\n  z-index: 200000;\r\n}\r\n\r\n#BitOS-desktop-runner-input {\r\n  width: 98%;\r\n  margin: auto;\r\n  color: #333;\r\n  height: 64px;\r\n  font-size: 48px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#BitOS-desktop > mwc-icon {\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n#BitOS-desktop-file-layer {\r\n  position: absolute;\r\n  display: flex;\r\n  gap: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 1rem;\r\n}\r\n\r\n.BitOS-desktop-entry {\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  border-radius: 10px;\r\n  /* max-width: 80px; */\r\n  max-height: 80px;\r\n  padding: 1rem;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  transition: transform 0.5s;\r\n}\r\n\r\n.BitOS-desktop-entry:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.BitOS-desktop-entry mwc-icon {\r\n  margin-top: 0.25rem;\r\n  color: white;\r\n  font-size: 2rem;\r\n}\r\n\r\n.BitOS-desktop-entry h1 {\r\n  color: white;\r\n  font-size: 1rem;\r\n  word-break: break-all;\r\n}\r\n","",{version:3,sources:["webpack://./src/modules/desktop/index.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,700&display=swap');\r\n\r\n#BitOS-desktop {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100%;\r\n  background-color: #121212;\r\n}\r\n\r\n#BitOS-desktop-wallpaper {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#BitOS-desktop-wallpaper.transition {\r\n  transition: opacity 2.5s;\r\n}\r\n\r\n#BitOS-desktop-menu-button {\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 1rem;\r\n  padding: 0.5rem;\r\n  background: green;\r\n  border-radius: 50%;\r\n  transition: transform 0.5s, background-color 0.25s;\r\n}\r\n\r\n/* #BitOS-desktop-menu-button:hover { */\r\n.BitOS-desktop-menu-button-hover {\r\n  cursor: pointer;\r\n  transform: rotate(45deg);\r\n  background-color: darkgreen;\r\n}\r\n\r\n#BitOS-desktop-shell-button {\r\n  opacity: 0;\r\n  color: green;\r\n  font-size: 2.5rem;\r\n  position: absolute;\r\n  bottom: 3em;\r\n  right: 1rem;\r\n  padding: 0.5rem;\r\n  background: #121212;\r\n  border-radius: 50%;\r\n  transition: transform 0.5s, background-color 0.25s, opacity 1s;\r\n}\r\n\r\n#BitOS-desktop-shell-button:hover {\r\n  cursor: pointer;\r\n  transform: rotate(45deg);\r\n  background-color: #080808;\r\n}\r\n\r\n#BitOS-desktop-exit-button {\r\n  opacity: 0;\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 2.5em;\r\n  padding: 0.5rem;\r\n  background: rgb(45, 18, 71);\r\n  border-radius: 50%;\r\n  transition: transform 0.5s, background-color 0.25s, opacity 1s;\r\n}\r\n\r\n#BitOS-desktop-exit-button:hover {\r\n  cursor: pointer;\r\n  transform: rotate(45deg);\r\n  background-color: #500f4a;\r\n}\r\n\r\n#BitOS-desktop-exit-button, #BitOS-desktop-menu-button, #BitOS-desktop-shell-button {\r\n  user-select: none;\r\n}\r\n\r\n.BitOS-desktop-launcher-window {\r\n  background: #121212;\r\n}\r\n\r\n.BitOS-desktop-launcher-window *:not(.wb-icon, .wb-max, .wb-close) {\r\n  cursor: url(\"data:image/png;base64,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\"), crosshair;\r\n}\r\n\r\n.BitOS-desktop-launcher-window, .BitOS-desktop-launcher-window .wb-body {\r\n  background-color: transparent;\r\n  border-bottom-left-radius: 40px;\r\n  border-bottom-right-radius: 40px;\r\n}\r\n\r\n.BitOS-desktop-launcher-window .wb-header .wb-title {\r\n  font-family: 'Kanit', sans-serif;\r\n  font-variant: small-caps;\r\n  text-shadow: 3px 3px 2px rgb(145, 145, 145);\r\n  font-size: 2rem;\r\n  text-decoration: #357C3C wavy underline;\r\n  text-decoration-thickness: 2px;\r\n}\r\n\r\n#BitOS-desktop-launcher {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin: 2rem;\r\n  z-index: 100;\r\n  position: relative;\r\n  perspective: 10;\r\n}\r\n\r\n#BitOS-desktop-launcher-wallpaper {\r\n  /* opacity: 0; */\r\n  background-color: #121212;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-size: cover;\r\n\r\n  animation: fadein 0.75s;\r\n}\r\n\r\n@keyframes fadein {\r\n  from {opacity: 0}\r\n  to {opacity: 1}\r\n}\r\n\r\n.BitOS-desktop-launcher-entry {\r\n  width: 128px;\r\n  height: 128px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  padding: 1.25rem;\r\n  border-radius: 25px;\r\n  color: white;\r\n  background-color: rgba(7, 7, 7, 0.7);\r\n  transition: transform 0.5s;\r\n  overflow: hidden;\r\n  word-break: break-all;\r\n}\r\n\r\n.BitOS-desktop-launcher-entry:hover {\r\n  transform: scale(1.15);\r\n  /* cursor: pointer; */\r\n}\r\n\r\n.BitOS-desktop-launcher-entry h1 {\r\n  font-size: 1em;\r\n}\r\n\r\n.BitOS-desktop-launcher-entry img {\r\n  width: 64px;\r\n  margin: auto;\r\n  /* temporary hack; famous last words */\r\n  filter: invert(1);\r\n}\r\n\r\n#BitOS-desktop-runner {\r\n  display: flex;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  padding: 1rem;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #121212;\r\n  width: 60%;\r\n  height: 120px;\r\n  border-radius: 10px;\r\n  z-index: 200000;\r\n}\r\n\r\n#BitOS-desktop-runner-input {\r\n  width: 98%;\r\n  margin: auto;\r\n  color: #333;\r\n  height: 64px;\r\n  font-size: 48px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#BitOS-desktop > mwc-icon {\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n#BitOS-desktop-file-layer {\r\n  position: absolute;\r\n  display: flex;\r\n  gap: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 1rem;\r\n}\r\n\r\n.BitOS-desktop-entry {\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  border-radius: 10px;\r\n  /* max-width: 80px; */\r\n  max-height: 80px;\r\n  padding: 1rem;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  transition: transform 0.5s;\r\n}\r\n\r\n.BitOS-desktop-entry:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.BitOS-desktop-entry mwc-icon {\r\n  margin-top: 0.25rem;\r\n  color: white;\r\n  font-size: 2rem;\r\n}\r\n\r\n.BitOS-desktop-entry h1 {\r\n  color: white;\r\n  font-size: 1rem;\r\n  word-break: break-all;\r\n}\r\n"],sourceRoot:""}]);const p=E},49825:(r,n,A)=>{A.r(n),A.d(n,{default:()=>b});var e=A(90672),o=A.n(e),t=A(43034),s=A.n(t),i=A(16992),a=A.n(i),d=A(30919),E=A.n(d),C=A(15671),p=A.n(C),l=A(37253),c=A.n(l),u=A(52390),B={};B.styleTagTransform=c(),B.setAttributes=E(),B.insert=a().bind(null,"head"),B.domAPI=s(),B.insertStyleElement=p(),o()(u.Z,B);const b=u.Z&&u.Z.locals?u.Z.locals:void 0},45277:r=>{r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAADjdJREFUaEPNWWmQXFUVPuf2dE+aTIbNBIhOSAgT3r23JwNkUItFDSQksijEhciSKJGAhVtFS8BgIRosUSKIKGLYNCWogKKiwaWSUCqgFUlmpu+9PRlikIQliaBWZCbM9LvHOj3vdb/eJmPxx1s1VdPvvbuc7TvfORehPBAAqPLz/+q/5mfjN9EYXwDn3DuJ6CtSyjMQ0fOkcWfUvWz+tbW2ExEXSSnvSOrNOfdhIjpbKXVxs9kJAcZXuTHmSkT87pQpUw7p6OgYTn5dKBRmEdE7AGC7lOqpOkuOI6lzbo73fhMKnL7n5T3p+fPnF+O1rbXfAIAlSqmZzU73BgQYOxVbxnu/ARGzvAkR3ai1/mK9XSMpaoSx1v6MiN6LiDg0NJTp6ekZrRIAYYmSDQRILFftQqUXCAhUFRHNLGCM+YUQYgYBnAVEXyCiqwCgXWs9chAnK70e3D44dXR0dCUArGEBTunpGY0jsWIBPbNk1QaWrLLAeD5t8uZKFPUu5Jz7y5jryEudcx8iggfCsHh0V1fXnqTZ+/v7Z3d1de1odAhr7dUAcMfQ0HCmp2detQXeiAsZYy4VQizmwzWzQL0A9EAYhlUCOOdWEdFaIcSZQRBsqvXnOgEiL7DWlGPAGMPgsUZKOT8GETbJmAWaqN4YcxUivkcpdU4jAXiadW5DGIaH7t237x3HHH30aiJYnc1Oap81a9YBXto5t4SIHokOfZ5S6lfVAiA4Z1d677+jlGoViGG9C6mZzrmziehWKWVXRYCxo1cDaRM/yzdBIWPMewHgpxyDANCGiHdJKTkOSmNgYCDw3q8gos8CQAMBAIwxbQBwota5PyYRrBkKJY+IVT9qUpm1ljc+V2u9pMoCMzqGkxFujHkrIrKGBpRSDyNiOSPy+sbZTiDY3kyAOiVGD5JBbEz+TAD4ulLqlKYWqPVNY8xaRHy/UupYY8z7AeDevXv3HhFj9URzNycqANwOQHUWMMacJBBv90QziegXra2tqzo7O1/ns1hrr4cxGD05cuc7s9lJ2Vmzjiu5Z+z9tS5ZtmIsgFbqWFZpb++2yd3dJ75WK+jWrVsPa21tvQURvyalZE1XuaUpCZC0wJjoRCScczsBYD8RbULEKwHgS0qpNbwAv9+9a3drx4yO4YoA2WwcXzUC1OszaQFezFo7TWv9cvKAO3bsOHRkZOR3RHQKACxXSv2gFhh27tw56cCBA7dxklNKvRTPt9YeCwDPRdn2Z865DbyPUmoRf7N9cLA1LBbbpFSvGJNnQLkzm20qQK1eS8FVciG2gHXuYu/9PcPDw+012fJCIvqhQMwSwnIl6wWoQrmEnowxxyPiICKeL6V8zFr7KBFxEmR/Zxf6EhFdqLXuqrNAOeHGdmhARK21SwFwoVJyBXMWIlqhlLqmQawcjYis2YoF6vVRh9bOupkEtJOILtBa/9wY8xgAZLTWZ0cCML+ap5S61Tp3Knn/RbZOLUg02GoijyqqNCZ/BKJ4ZTwBjDEnKqX6ETGMEw8RpZxzuwHgeQB4jIiuQ8S1SqkvTOQEjYM4MdMYs1gIPENKtdoYc5YQYm0QBPPGDlEZxpgjELFagISrOOc+Q0S3xJqumXu6QLzLE81CxEc90cqc1v/hb5xzVzCMK6UuyOfz3UKIT0opP1pvgeaZ+PMRjDKMNaXTvb29kzPp9D8BcamU8qfJAzrnziOiX0bPliqtfjzRuqmUByI2GsH43UqpI5PZuiqRVYNfCebw2WefzTAuNxUgEr6/v78jp3O7UVSSGK/X29v7lkwmcxkXQwCwVCn143HCrspzajMxo1kZQuvp9PheZ4w5nSmvVOpMIdCXtRihwXjlqLX2GAB4sSRAZIGk0Us1Rejvz7RmgjiJ8WmYTHKlppS6rNnpJlzQ1C+QDGKTQcQ7iGiN1poDslaTFQEiCyStXSi4Hu/92qGhoQVJiJ5IIE9IAHalZODULuycO5KIXiKixVrrjXUCOHsMELxIRBdprX9S+76xEcdjadXO3lDQgYGBN3vvb/benykQ2z3RxlQqdb0Mgr6qlBHHQF/f4V1z5/6zvFhif4ZLa+2alpaWO04ITnihNoiZsYZheK2UckUtwvF6/f19R73++sj+np4eZrxVo6oeiPdkWOR5AJAWQqwjoiEiWoaIb/Hen5rL5XqTq7CFrLWXAMCjOoLAul0aV4Slz5y1ywjg+0R0ZE7rV2MF5fP5U4QQdwPA3Gi9DS0tLR+fM2fO3+Ks2NCFrHV3EvmLhRDdUkrmKiXOjojPENHftNaLkwdka4VhuDvG+VpULhQK89mSRFRQSj3IdDjpNtbaZRAJoLV+dWy//AxE4bikQMRvElEbEV0LAEwme3RO/ycuk6uUFTHLF4jodq31dcmX1trVnugardSh5ZhAAJM3MxDx74j4Ps4DSQGMMWyZ9QDAie5IIcT3ygVP9CEnTER8aMqUtmkdHTNKLRtr7Z1E9IFJkybNnj179r/5WaFQmOs99RL5S7XWP+RndRaw1n46ql9nx9ovCTF20BsR8RNKKXax8igUCtPJ+xcA8T1Sql8mIdVZuwkAfSCDBdbaG4DgWsC4a1FZY8uWLekYgchTyjrLoPBQLpe7eqz2HeuSGGP2AcB3tNY31AkQ+bJjhqiUOj9ePtaotfbPAPCvmO4mhTDGMIP841g7pTKcc9sA4Bkp1eXO2eVEdH+xWDxiLgd8EwYQdQE3I8BCqdTv49V6e3untbS0vCSEuEpKua5OAOY7iMgTmH/8usZ9jiWinSjElUrJdROmA85tw2YC1CBK/NM5xz5/6Z49e46q6dR9FADWCSGOC4KAC6FqFzLGPAwAJyulmKf7pIYiQvbVdDo9vbOzc99Bm1bRaay1rIhjUqnUeWEY3khEH1RKHoYo/ODgYPvIyMh1AvF5QLQAkA+C4FXn3HPe0+ZcTi+PIRYAuonoKER8TSnFFV7s2WP/REjCiHO9UurmWuUYY56KJi9oorjS4xK1FqlPIMBjUsq/Rv2cxwHgEOJyS4jPSim538OByhUZW/z4eE1P9A+B+CZGNCHEbu/9RkTk/LIZEU8jIlbuyrILJbCf+5nXZtKZjs45rOHKYKImhPg7AHxMa31XMwGstRcA4L1EnvukS7lI4W95fiqVOlUI4YIg6KudXygUpoTFUKHAHBEpRDwsm81ePTQ09GtEPEoI8fYgCLhuRufcOk90CQJM5ZxTQiFGgGw2+xwibhwjTtXRFSHTLcVicXp3d/feqgMkWKGxlknXGQBwk1KKBa6P02QCqMAo55iFiNgehuE2TpTGmBlcL0cB+72Eok/ifISI86WUHOglU57LFREgnqakfLJWQ9ZapsAzlVJvY0o7PDzMtcFHiEgDABcf24joCSHEb6SUT1XmVxQRuehaAHgXEf1LCPHgyMjILel05gQA4hqC3Qk8EQHQeoFiK8M5ALyZGwkJJFwIAL8lopO01gwQUf8F4BopZXsj0matvZm7zkKIbxARH7wDALhF+DQiHgIAb4/+MqOjo4d3d3dXtV4Y/jKZdL/3NIKIDxLRVES8OPJ/DsjXiIgT3vOIyLXDtxDxABFt01qfnswD1trbAOCyGKFKAhhjLgcA5hxztNbPVlsAYWCg8KZisfhnRDyON0mn0xd1dnY+nfyO3bCtrW1qEAQv1sJ7Pp+/lS2GiDJuqyQrNSJ6m9aau9wll+vP578vhGDuxQHPVig992MxsNN7/0Qul1seP4etz2w9LJ1J51Op1D+Ys8R8JAYqzoL5vGkDhG8i4jIi2pFKpVbIIPhTI2bKm5kSwuCCbHbSI8PDw467blprblyVhzHm3wD0Sk7njqOE1GxxAPhcuqVldicTt2hYa08GgL8CwIVKq0eruBAzP05iiLi9tbV1QYl/NMiUA4VCTzEM7wUALYT4qpRydSNUstZeREQPICJzm8lEdI7WekP8bV9f3+GsMAC4TWv9mSrB8uYpkRJZKeWJyefW2i8DwKrhoaGp8yJqXUWnC4XCad77x733/S0tLYsYuhodzhiTAQA++Dyd0+c1uTxhcOgkoh+xsJlM5tAG5eJ6vlvTWv8h3od5VRiGu7h8zWl9Q9LC1to8kd+udW5J/H2VAPwwFgIA+ohoUYy1//MFbGQ9a+2g935LLtf1oZrW+SOIeHoQBNOTRYy19mNM1gBgmVZqfeKuIO6vVjXPmtQDdgG3QhBxy+jo6OJaVEkWE+MJ5pzrIiJWRFUpuWvXruz+/fv3ee8fzOVyVyRh15j8b1HgQvL0iNaaO+KlEfGjFcVisaNEBKPRUIAIWs8BAL5B3NTe3n5h7dXqRLiQtZYv/VanUilGp7I78qUIN7EA4VwlK6QxqkX2EtGTiPhORHyciBjzeyLYZZpzUyU04yumRo4+Bq+8ERfhnFQu11oz4SoPhs7Jh0xeBAhLvfd8l5tiusCIIwP5c1cobESEA1LKd8eQF3H6+xDxw6Ojo21J60ZtlPVCCK6R5yIic352HY6JW5VS3649asICjcm5c+5d3nuuqKYLITZ77zkfcKLiy+1zEJFbJjuicrNIRCcj4gmA0EeemCJsUkoxDS553sZNm1qmTZv2MiJydVamxfyem7uIOEspxRl+QqOpC5VmJ7gKAHAi4gs7HV1qv+y935xKpe6TUj1ZCVAEaw37MLcF+VvOsjruF8UdPgB4lYgcAK0EQM7A3Afldv4VSql7JnT6RiXl+BOblFANJjHU8o0NAHyKiPjKaB1rnesBRHzAE61DgB8h4vRyQCLeHgTBqkatlbotEiTyIMImD91MgOaCFQqFxWEYrgIAZpfMhdYzPeCCqdQUzmQWEdHh5OlpndNmopo/KAodXNcH/yIZuI2CrxEEj7tqnS4R/gsuneGemgn5dwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=9825.js.map