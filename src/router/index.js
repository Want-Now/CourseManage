import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/LoginPart/login'
import ActiveT from '@/components/LoginPart/activeTeacher'
import ActiveS from '@/components/LoginPart/activeStudent'
import RetrievePsw from '@/components/LoginPart/retrievePassword'
import ResetPsw from '@/components/LoginPart/resetPassword'
//LoginPart
import SeminarProceed from '@/components/SeminarTeacher/seminarProceed'
import SeminarChangePScore from '@/components/SeminarTeacher/seminarChangePScore'
import ChangeReportScore from '@/components/SeminarTeacher/changeReportScore'
import SeminarQuestionScore from '@/components/SeminarTeacher/seminarQuestionScore'
import ViewReportScore from '@/components/SeminarTeacher/viewReportScore'
import ViewScore from '@/components/SeminarTeacher/viewScore'
//SeminarTeacher

import StuPersonCenter from '@/components/StudentPersonal/stuPersonalCenter'
import StudentCourse from '@/components/StudentPersonal/studentCourse'
import CourseInfo from '@/components/StudentPersonal/courseInfo'
import CourseScore from '@/components/StudentPersonal/courseScore'
import TeamPage from '@/components/StudentPersonal/teamPage'
//StudentPersonal
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
      path: '/RetrievePsw',
      name: 'RetrievePassword',
      component: RetrievePsw
    },
    {
      path: '/ResetPsw',
      name: 'ResetPassword',
      component: ResetPsw
    },
    //LoginPart
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
    },
    //
    {
      path: '/StuPersonCenter',
      name: 'StuPersonalCenter',
      component: StuPersonCenter
    },
    {
      path: '/StudentCourse',
      name: 'StudentCourse',
      component: StudentCourse
    },
    {
      path: '/CourseInfo',
      name: 'CourseInfo',
      component: CourseInfo
    },
    {
      path: '/CourseScore',
      name: 'CourseScore',
      component: CourseScore
    },
    {
      path: '/TeamPage',
      name: 'TeamPage',
      component: TeamPage
    },
  ]
})
