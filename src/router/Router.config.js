import HomePage from '@p/comm/Main.view';
import Login from '@p/login/Login.view';
import NotFoundPage from '@p/not-found.view';
import LoginVerif from '@p/login/LoginVerif.view';
import ForgetPwd from '@p/login/ForgetPwd.view';
import Registered from '@p/login/Registered.view';
import Member from '@p/member/Member.view';
import PersonalInfo from '@p/member/PersonalInfo.view';
import About from '@p/member/About.view';
import Wallet from '@p/member/Wallet.view';
import BetgRecord from '@p/member/BetgRecord.view';
import Prefer from '@p/preferential/Prefer.view';
import FundRecord from '@p/member/FundRecord.view';
import Recharge from '@p/member/Recharge.view';
import FundDetails from '@p/member/FundDetails.view';
import FundBank from '@p/member/FundBank.view';
import Withdrawal from '@p/member/withdrawal/Withdrawal.view';
import LoginPwd from '@p/member/pwd/LoginPwd.view';
import WithdrawPwd from '@p/member/pwd/WithdrawPwd.view';
import ChangeLoginPwd from '@p/member/pwd/ChangeLoginPwd.view';
import ChangeWithPwd from '@p/member/pwd/ChangeWithPwd.view';
import BindBank from '@p/member/bindBank/BindBank.view';
import BankBranch from '@p/member/bindBank/BankBranch.view';




export default [
  {
    name: 'main',
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/loginverif',
    name: 'loginverif',
    component: LoginVerif
  },
  {
    path: '/forgetPwd',
    name: 'forgetPwd',
    component: ForgetPwd
  },
  {
    path: '/registered',
    name: 'registered',
    component: Registered
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/personalInfo',
    name: 'personalInfo',
    component: PersonalInfo
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/betRecord',
    name: 'betRecord',
    component: BetgRecord
  },
  {
    path: '/prefer',
    name: 'prefer',
    component: Prefer
  },
  {
    path: '/fundrecord',
    name: 'fundrecord',
    component: FundRecord
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: Recharge
  },
  {
    path: '/fundDetails',
    name: 'fundDetails',
    component: FundDetails
  },
  {
    path: '/fundBank',
    name: 'fundBank',
    component: FundBank
  },
  {
    path: '/withdrawal',
    name: 'withdrawal',
    component: Withdrawal
  },
  {
    path: '/loginPwd',
    name: 'loginPwd',
    component: LoginPwd
  },
  {
    path: '/withdrawPwd',
    name: 'withdrawPwd',
    component: WithdrawPwd
  },
  {
    path: '/changeLoginPwd',
    name: 'changeLoginPwd',
    component: ChangeLoginPwd
  },
  {
    path: '/changeWithPwd',
    name: 'changeWithPwd',
    component: ChangeWithPwd
  },
  {
    path: '/bindBank',
    name: 'bindBank',
    component: BindBank
  },
  {
    path: '/bankBranch',
    name: 'bankBranch',
    component: BankBranch
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

// const AsyncComponentHook = (path) => {
//     let component = () => import (`@/pages/${path}.vue`);
//     return component;
//   };


// const AsyncComponentHook = (path) => {
//     let component = () => import (`@/pages/${path}.vue`);
//     return component;
//   };
  
//   export default [
//     {
//       name: 'main',
//       path: '/',
//       component: AsyncComponentHook('comm/Main.view')
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: AsyncComponentHook('login/Login.view')
//     },
//     {
//       path: '/loginverif',
//       name: 'loginverif',
//       component: AsyncComponentHook('login/LoginV.view')
//     }
//   ];

