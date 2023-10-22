"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[822],{3822:(Ie,v,d)=>{d.r(v),d.d(v,{AccountModule:()=>xe});var n=d(433),m=d(6895),a=d(7859),e=d(8256),u=d(6082);let T=(()=>{class t{constructor(i,r){this.router=i,this.accountService=r,this.accountService.accountValue&&this.router.navigate(["/"])}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(a.F0),e.Y36(u.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-lg-8","offset-lg-2","mt-5"],[1,"card","m-3"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"router-outlet"),e.qZA()()()())},dependencies:[a.lC],encapsulation:2}),t})();var p=d(590);function q(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function C(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function w(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,q,2,0,"div",16),e.YNc(2,C,2,0,"div",16),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function A(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function x(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,A,2,0,"div",16),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required)}}function U(t,o){1&t&&e._UZ(0,"span",17)}const Z=function(t){return{"is-invalid":t}};let I=(()=>{class t{constructor(i,r,s,f,_){this.formBuilder=i,this.route=r,this.router=s,this.accountService=f,this.alertService=_,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]],password:["",n.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.login(this.f.email.value,this.f.password.value).pipe((0,p.P)()).subscribe({next:()=>{this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},error:i=>{this.alertService.error(i),this.submitting=!1}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(u.B),e.Y36(u.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:25,vars:11,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"row"],[1,"mb-3","col"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"mb-3","col","text-end"],["routerLink","../forgot-password",1,"btn","btn-link","pe-0"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"div")(1,"h3",0),e._uU(2,"Login"),e.qZA(),e.TgZ(3,"div",1)(4,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(5,"div",3)(6,"label",4),e._uU(7,"Email"),e.qZA(),e._UZ(8,"input",5),e.YNc(9,w,3,2,"div",6),e.qZA(),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Password"),e.qZA(),e._UZ(13,"input",7),e.YNc(14,x,2,1,"div",6),e.qZA(),e.TgZ(15,"div",8)(16,"div",9)(17,"button",10),e.YNc(18,U,1,0,"span",11),e._uU(19," Login "),e.qZA(),e.TgZ(20,"a",12),e._uU(21,"Register"),e.qZA()(),e.TgZ(22,"div",13)(23,"a",14),e._uU(24,"Forgot Password?"),e.qZA()()()()()()),2&i&&(e.xp6(4),e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,Z,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,Z,r.submitted&&r.f.password.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.password.errors),e.xp6(3),e.Q6J("disabled",r.submitting),e.xp6(1),e.Q6J("ngIf",r.submitting))},dependencies:[m.mk,m.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,a.rH],encapsulation:2}),t})();var h=d(9026),J=d(410);const N=["teams"];function P(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Title is required"),e.qZA())}function Y(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,P,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.title.errors.required)}}function Q(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function y(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,Q,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.firstName.errors.required)}}function k(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function S(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,k,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.lastName.errors.required)}}function R(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function V(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email must be a valid email address"),e.qZA())}function F(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,R,2,0,"div",36),e.YNc(2,V,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function L(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Role is required"),e.qZA())}function E(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,L,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.role.errors.required)}}function B(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function M(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function K(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,B,2,0,"div",36),e.YNc(2,M,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.password.errors.minlength)}}function O(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function G(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Passwords must match"),e.qZA())}function z(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,O,2,0,"div",36),e.YNc(2,G,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.mustMatch)}}function j(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"phone is required"),e.qZA())}function H(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"phone should be 8 numbers"),e.qZA())}function X(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"phone should be 8 numbers"),e.qZA())}function W(t,o){if(1&t&&(e.TgZ(0,"div",35),e.YNc(1,j,2,0,"div",36),e.YNc(2,H,2,0,"div",36),e.YNc(3,X,2,0,"div",36),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.phone.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.phone.errors.min),e.xp6(1),e.Q6J("ngIf",i.f.phone.errors.max)}}function $(t,o){if(1&t&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.s9C("value",i),e.xp6(1),e.Oqu(i)}}const l=function(t){return{"is-invalid":t}};function D(t,o){if(1&t&&(e.TgZ(0,"div",3)(1,"label",5),e._uU(2,"Career"),e.qZA(),e.TgZ(3,"select",37)(4,"option",38),e._uU(5,"Select Your Career"),e.qZA(),e.YNc(6,$,2,2,"option",39),e.qZA()()),2&t){const i=e.oxw();e.xp6(3),e.Q6J("ngClass",e.VKq(2,l,i.submitted&&i.f.career.errors)),e.xp6(3),e.Q6J("ngForOf",i.careers)}}function ee(t,o){1&t&&(e.TgZ(0,"div",16)(1,"label",5),e._uU(2,"Address"),e.qZA(),e._UZ(3,"input",41),e.qZA())}function te(t,o){1&t&&(e.TgZ(0,"div",35),e._uU(1,"Accept Ts & Cs is required"),e.qZA())}function ie(t,o){1&t&&e._UZ(0,"span",42)}let re=(()=>{class t{constructor(i,r,s,f,_){this.formBuilder=i,this.route=r,this.router=s,this.accountService=f,this.alertService=_,this.submitting=!1,this.submitted=!1,this.careers=Object.keys(J.J).map(Ue=>Ue),this.isProvider=!1,this.isUser=!1,this.selectedTeam=""}ngOnInit(){this.role=this.route.snapshot.params.role,this.form=this.formBuilder.group({title:["",n.kI.required],firstName:["",n.kI.required],lastName:["",n.kI.required],address:["",n.kI.required],role:["",n.kI.required],career:["",n.kI.required],phone:["",n.kI.required,n.kI.minLength(8),n.kI.maxLength(8)],email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(6)]],confirmPassword:["",n.kI.required],acceptTerms:[!1,n.kI.requiredTrue],isProvider:[!1,n.kI.requiredTrue]},{validator:(0,h.Yf)("password","confirmPassword")})}get f(){return this.form.controls}onSelected(){this.selectedTeam=this.teams.nativeElement.value,"Provider"==this.selectedTeam&&(this.isProvider=!0,this.isUser=!1),"User"==this.selectedTeam&&(this.isProvider=!1,this.isUser=!0)}onSubmit(){this.submitted=!0,this.alertService.clear(),this.submitting=!0,this.accountService.register(this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Registration successful, please check your email for verification instructions",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.submitting=!1}})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(u.B),e.Y36(u.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(i,r){if(1&i&&e.Gf(N,5),2&i){let s;e.iGM(s=e.CRH())&&(r.teams=s.first)}},decls:76,vars:41,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-2"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"mb-3","col-7"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["formControlName","role",1,"form-select",3,"ngClass","change"],["teams",""],["value","User"],["value","Provider"],[1,"mb-3","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],["type","text","formControlName","phone",1,"form-control",3,"ngClass"],["class","row",4,"ngIf"],["class","mb-3 col-7",4,"ngIf"],[1,"mb-3","form-check"],["type","checkbox","formControlName","acceptTerms","id","acceptTerms",1,"form-check-input",3,"ngClass"],["for","acceptTerms",1,"form-check-label"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],["formControlName","career",1,"form-select",3,"ngClass"],["disabled","","selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","City","type","text","formControlName","address",1,"form-control"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"div")(1,"h3",0),e._uU(2,"Register"),e.qZA(),e.TgZ(3,"div",1)(4,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(5,"div",3)(6,"div",4)(7,"label",5),e._uU(8,"Title"),e.qZA(),e.TgZ(9,"select",6),e._UZ(10,"option",7),e.TgZ(11,"option",8),e._uU(12,"Mr"),e.qZA(),e.TgZ(13,"option",9),e._uU(14,"Mrs"),e.qZA(),e.TgZ(15,"option",10),e._uU(16,"Miss"),e.qZA(),e.TgZ(17,"option",11),e._uU(18,"Ms"),e.qZA()(),e.YNc(19,Y,2,1,"div",12),e.qZA(),e.TgZ(20,"div",13)(21,"label",5),e._uU(22,"First Name"),e.qZA(),e._UZ(23,"input",14),e.YNc(24,y,2,1,"div",12),e.qZA(),e.TgZ(25,"div",13)(26,"label",5),e._uU(27,"Last Name"),e.qZA(),e._UZ(28,"input",15),e.YNc(29,S,2,1,"div",12),e.qZA()(),e.TgZ(30,"div",3)(31,"div",16)(32,"label",5),e._uU(33,"Email"),e.qZA(),e._UZ(34,"input",17),e.YNc(35,F,3,2,"div",12),e.qZA(),e.TgZ(36,"div",13)(37,"label",5),e._uU(38,"Role"),e.qZA(),e.TgZ(39,"select",18,19),e.NdJ("change",function(){return r.onSelected()}),e._UZ(41,"option",7),e.TgZ(42,"option",20),e._uU(43,"User"),e.qZA(),e.TgZ(44,"option",21),e._uU(45,"Provider"),e.qZA()(),e.YNc(46,E,2,1,"div",12),e.qZA()(),e.TgZ(47,"div",3)(48,"div",22)(49,"label",5),e._uU(50,"Password"),e.qZA(),e._UZ(51,"input",23),e.YNc(52,K,3,2,"div",12),e.qZA(),e.TgZ(53,"div",22)(54,"label",5),e._uU(55,"Confirm Password"),e.qZA(),e._UZ(56,"input",24),e.YNc(57,z,3,2,"div",12),e.qZA()(),e.TgZ(58,"div",13)(59,"label",5),e._uU(60,"Phone"),e.qZA(),e._UZ(61,"input",25),e.YNc(62,W,4,3,"div",12),e.qZA(),e.YNc(63,D,7,4,"div",26),e.YNc(64,ee,4,0,"div",27),e.TgZ(65,"div",28),e._UZ(66,"input",29),e.TgZ(67,"label",30),e._uU(68,"Accept Terms & Conditions"),e.qZA(),e.YNc(69,te,2,0,"div",12),e.qZA(),e.TgZ(70,"div",31)(71,"button",32),e.YNc(72,ie,1,0,"span",33),e._uU(73," Register "),e.qZA(),e.TgZ(74,"a",34),e._uU(75,"Cancel"),e.qZA()()()()()),2&i&&(e.xp6(4),e.Q6J("formGroup",r.form),e.xp6(5),e.Q6J("ngClass",e.VKq(23,l,r.submitted&&r.f.title.errors)),e.xp6(10),e.Q6J("ngIf",r.submitted&&r.f.title.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(25,l,r.submitted&&r.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(27,l,r.submitted&&r.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.lastName.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(29,l,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(31,l,r.submitted&&r.f.role.errors)),e.xp6(7),e.Q6J("ngIf",r.submitted&&r.f.role.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(33,l,r.submitted&&r.f.password.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(35,l,r.submitted&&r.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.confirmPassword.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(37,l,r.submitted&&r.f.phone.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.phone.errors),e.xp6(1),e.Q6J("ngIf",r.isProvider),e.xp6(1),e.Q6J("ngIf",r.isUser),e.xp6(2),e.Q6J("ngClass",e.VKq(39,l,r.submitted&&r.f.acceptTerms.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&r.f.acceptTerms.errors),e.xp6(2),e.Q6J("disabled",r.submitting),e.xp6(1),e.Q6J("ngIf",r.submitting))},dependencies:[m.mk,m.sg,m.O5,n._Y,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.JL,n.sg,n.u,a.rH],encapsulation:2}),t})();function oe(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Verifying... "),e.qZA())}function ne(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Verification failed, you can also verify your account using the "),e.TgZ(2,"a",3),e._uU(3,"forgot password"),e.qZA(),e._uU(4," page. "),e.qZA())}var g=(()=>{return(t=g||(g={}))[t.Verifying=0]="Verifying",t[t.Failed=1]="Failed",g;var t})();let se=(()=>{class t{constructor(i,r,s,f){this.route=i,this.router=r,this.accountService=s,this.alertService=f,this.EmailStatus=g,this.emailStatus=g.Verifying}ngOnInit(){const i=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.verifyEmail(i).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Verification successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:()=>{this.emailStatus=g.Failed}})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(a.gz),e.Y36(a.F0),e.Y36(u.B),e.Y36(u.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],["routerLink","forgot-password"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Verify Email"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,oe,2,0,"div",2),e.YNc(4,ne,5,0,"div",2),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf",r.emailStatus==r.EmailStatus.Verifying),e.xp6(1),e.Q6J("ngIf",r.emailStatus==r.EmailStatus.Failed))},dependencies:[m.O5,a.rH],encapsulation:2}),t})();var ae=d(8746);function de(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function me(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function ue(t,o){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,de,2,0,"div",11),e.YNc(2,me,2,0,"div",11),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function le(t,o){1&t&&e._UZ(0,"span",12)}const ce=function(t){return{"is-invalid":t}};let fe=(()=>{class t{constructor(i,r,s){this.formBuilder=i,this.accountService=r,this.alertService=s,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.forgotPassword(this.f.email.value).pipe((0,p.P)()).pipe((0,ae.x)(()=>this.loading=!1)).subscribe({next:()=>this.alertService.success("Please check your email for password reset instructions"),error:i=>this.alertService.error(i)}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(u.B),e.Y36(u.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:15,vars:7,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Forgot Password"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,ue,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"button",7),e.YNc(11,le,1,0,"span",8),e._uU(12," Submit "),e.qZA(),e.TgZ(13,"a",9),e._uU(14,"Cancel"),e.qZA()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("ngClass",e.VKq(5,ce,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(2),e.Q6J("disabled",r.loading),e.xp6(1),e.Q6J("ngIf",r.loading))},dependencies:[m.mk,m.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,a.rH],encapsulation:2}),t})();function pe(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Validating token... "),e.qZA())}function ge(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Token validation failed, if the token has expired you can get a new one at the "),e.TgZ(2,"a",4),e._uU(3,"forgot password"),e.qZA(),e._uU(4," page. "),e.qZA())}function _e(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function ve(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function Ze(t,o){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,_e,2,0,"div",2),e.YNc(2,ve,2,0,"div",2),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.password.errors.minlength)}}function he(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function be(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Passwords must match"),e.qZA())}function Te(t,o){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,he,2,0,"div",2),e.YNc(2,be,2,0,"div",2),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.mustMatch)}}function qe(t,o){1&t&&e._UZ(0,"span",15)}const b=function(t){return{"is-invalid":t}};function Ce(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"form",5),e.NdJ("ngSubmit",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.onSubmit())}),e.TgZ(1,"div",6)(2,"label",7),e._uU(3,"Password"),e.qZA(),e._UZ(4,"input",8),e.YNc(5,Ze,3,2,"div",9),e.qZA(),e.TgZ(6,"div",6)(7,"label",7),e._uU(8,"Confirm Password"),e.qZA(),e._UZ(9,"input",10),e.YNc(10,Te,3,2,"div",9),e.qZA(),e.TgZ(11,"div",6)(12,"button",11),e.YNc(13,qe,1,0,"span",12),e._uU(14," Reset Password "),e.qZA(),e.TgZ(15,"a",13),e._uU(16,"Cancel"),e.qZA()()()}if(2&t){const i=e.oxw();e.Q6J("formGroup",i.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,b,i.submitted&&i.f.password.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,b,i.submitted&&i.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.confirmPassword.errors),e.xp6(2),e.Q6J("disabled",i.loading),e.xp6(1),e.Q6J("ngIf",i.loading)}}var c=(()=>{return(t=c||(c={}))[t.Validating=0]="Validating",t[t.Valid=1]="Valid",t[t.Invalid=2]="Invalid",c;var t})();const we=[{path:"",component:T,children:[{path:"login",component:I},{path:"register",component:re},{path:"verify-email",component:se},{path:"forgot-password",component:fe},{path:"reset-password",component:(()=>{class t{constructor(i,r,s,f,_){this.formBuilder=i,this.route=r,this.router=s,this.accountService=f,this.alertService=_,this.TokenStatus=c,this.tokenStatus=c.Validating,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({password:["",[n.kI.required,n.kI.minLength(6)]],confirmPassword:["",n.kI.required]},{validator:(0,h.Yf)("password","confirmPassword")});const i=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.validateResetToken(i).pipe((0,p.P)()).subscribe({next:()=>{this.token=i,this.tokenStatus=c.Valid},error:()=>{this.tokenStatus=c.Invalid}})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.resetPassword(this.token,this.f.password.value,this.f.confirmPassword.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Password reset successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.loading=!1}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(u.B),e.Y36(u.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:6,vars:3,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["routerLink","../forgot-password"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Reset Password"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,pe,2,0,"div",2),e.YNc(4,ge,5,0,"div",2),e.YNc(5,Ce,17,11,"form",3),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf",r.tokenStatus==r.TokenStatus.Validating),e.xp6(1),e.Q6J("ngIf",r.tokenStatus==r.TokenStatus.Invalid),e.xp6(1),e.Q6J("ngIf",r.tokenStatus==r.TokenStatus.Valid))},dependencies:[m.mk,m.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,a.rH],encapsulation:2}),t})()}]}];let Ae=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(we),a.Bz]}),t})(),xe=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,n.UX,Ae]}),t})()}}]);