"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[776],{776:function(t,n,e){e.r(n),e.d(n,{default:function(){return S}});var a=e(2791),r=e(3855),i=e(3634),c=e(6916),o=function(t){return t.contacts.contacts},s=function(t){return t.filter},u=function(t){return t.contacts.isLoading},l=function(t){return t.contacts.error},d=(0,c.P1)([s,o],(function(t,n){return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),m=e(9439),f=e(5984),h=e(1686),x=e.n(h),p="ContactForm_form__dhl+T",v="ContactForm_formButton__TN6Jq",j=e(3329),b=function(){var t=(0,r.I0)(),n=(0,r.v9)(o),e=(0,a.useState)(""),c=(0,m.Z)(e,2),s=c[0],u=c[1],l=(0,a.useState)(""),d=(0,m.Z)(l,2),h=d[0],b=d[1],_=(0,f.x0)(),C=(0,f.x0)();return(0,j.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault();var a=h.replace(/[^\d]/g,""),r=function(t,n){return t.find((function(t){return t.number.replace(/[^\d]/g,"")===n}))}(n,a),c=s.toLowerCase(),o=function(t,n){return t.find((function(t){return t.name.toLowerCase()===n}))}(n,c),l={name:s,number:h};r||o?o?x().Notify.info("".concat(s," is already in contacts.")):r&&x().Notify.info("".concat(h," is already in contacts.")):t((0,i.uK)(l)),u(""),b("")},children:[(0,j.jsx)("label",{htmlFor:_,children:"Name"}),(0,j.jsx)("input",{id:_,type:"text",name:"name",value:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(t){u(t.target.value)},required:!0}),(0,j.jsx)("label",{htmlFor:C,children:"Number"}),(0,j.jsx)("input",{id:C,type:"tel",name:"number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:function(t){b(t.target.value)},required:!0}),(0,j.jsx)("button",{className:v,type:"submit",children:"Add contact"})]})},_="ContactList_contactList__UFVCg",C="ContactList_contact__0STHS",g="ContactList_contactButton__QiycO",y=function(){var t=(0,r.I0)(),n=function(n){t((0,i.GK)(n.target.id))},e=(0,r.v9)(d);return(0,j.jsx)("ul",{className:_,children:e.map((function(t){return(0,j.jsxs)("li",{className:C,children:[(0,j.jsxs)("div",{children:[t.name,": ",t.phone]}),(0,j.jsx)("button",{className:g,type:"button",id:t.id,onClick:n,children:"Delete"})]},(0,f.x0)())}))})},F=e(4808),N="Filter_filterInput__1Cysk",L=function(){var t=(0,r.v9)(s),n=(0,r.I0)(),e=(0,f.x0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("label",{htmlFor:e,children:"Find contacts by name"}),(0,j.jsx)("input",{id:e,className:N,type:"text",name:"filter",value:t,title:"Find contact by name",onChange:function(t){var e=t.target.value.toLowerCase();n((0,F.K)(e))}})]})},k=e(8560),w=e(4217),A=e(9273),I=function(){var t=(0,k.v9)(w.dy).email,n=(0,r.I0)();return(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:t}),(0,j.jsx)("button",{type:"button",onClick:function(t){n((0,A.ni)())},children:"Logout"})]})},S=function(){var t=(0,r.v9)(u),n=(0,r.v9)(l),e=(0,r.I0)();return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,j.jsxs)("div",{children:[(0,j.jsx)(I,{}),(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(b,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(L,{}),t?(0,j.jsx)("div",{children:"Loading..."}):(0,j.jsx)(y,{}),n&&(0,j.jsx)("div",{children:"Something go wrong... Try again!"})]})}}}]);
//# sourceMappingURL=776.8d4d133f.chunk.js.map