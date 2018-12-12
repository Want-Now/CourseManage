import Vue from 'vue'
import Router from 'vue-router'
//LoginPart
import Login from '@/components/LoginPart/login'
import ActiveT from '@/components/LoginPart/activeTeacher'
import ActiveS from '@/components/LoginPart/activeStudent'
//
import SeminarProceed from '@/components/seminarProceed'
import SeminarChangePScore from '@/components/seminarChangePScore'
import ChangeReportScore from '@/components/changeReportScore'
import SeminarQuestionScore from '@/components/seminarQuestionScore'
import ViewReportScore from '@/components/viewReportScore'
import ViewScore from '@/components/viewScore'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ActiveStudent',
      name: 'ActiveStudent',
      component: ActiveS
    },
    {
      path: '/ActiveTeacher',
      name: 'ActiveTeacher',
      component: ActiveT
    },
    {
      path: '/SeminarProceed',
      name: 'SeminarProceed',
      component: SeminarProceed
    },
    {
      path: '/ChangeReportScore',
      name: 'changeReportScore',
      component: ChangeReportScore
    },
    {
      path: '/SeminarChangePScore',
      name: 'seminarChangePScore',
      component: SeminarChangePScore
    },
    {
      path: '/SeminarQuestionScore',
      name: 'seminarQuestionScore',
      component: SeminarQuestionScore
    },
    {
      path: '/ReportScore',
      name: 'viewReportScore',
      component: ViewReportScore
    },
    {
      path: '/Score',
      name: 'viewScore',
      component: ViewScore
    }
  ]
})
