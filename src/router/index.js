import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LoginPart/login'
import ActiveT from '@/components/LoginPart/activeTeacher'
import ActiveS from '@/components/LoginPart/activeStudent'
import RetrievePsw from '@/components/LoginPart/retrievePassword'
import ResetPsw from '@/components/LoginPart/resetPassword'
import PswSetting from '@/components/LoginPart/pswSetting'
import MailSetting from '@/components/LoginPart/mailSetting'

//LoginPart
import roundSeting from '@/components/SeminarTeacher/roundSeting'
import Seminarppt from '@/components/SeminarTeacher/Seminarppt'
import teacherCouseSeminar from '@/components/SeminarTeacher/teacherCouseSeminar'
import teacherSeminarFinished from '@/components/SeminarTeacher/teacherSeminarFinished'
import teacherSeminarRunning from '@/components/SeminarTeacher/teacherSeminarRunning'
import teacherSeminarNotstart from '@/components/SeminarTeacher/teacherSeminarNotstart'
import teacherSeminarPause from '@/components/SeminarTeacher/teacherSeminarPause'
import teacherSeminar from '@/components/SeminarTeacher/teacherSeminar'
import SeminarProceed from '@/components/SeminarTeacher/seminarProceed'
import SeminarChangePScore from '@/components/SeminarTeacher/seminarChangePScore'
import ChangeReportScore from '@/components/SeminarTeacher/changeReportScore'
import SeminarQuestionScore from '@/components/SeminarTeacher/seminarQuestionScore'
import ViewReportScore from '@/components/SeminarTeacher/viewReportScore'
import ViewScore from '@/components/SeminarTeacher/viewScore'
import creatSeminar from '@/components/SeminarTeacher/creatSeminar'
import modifySeminar from '@/components/SeminarTeacher/modifySeminar'
//SeminarTeacher

import StuPersonCenter from '@/components/StudentPersonal/stuPersonalCenter'
import StudentCourse from '@/components/StudentPersonal/studentCourse'
import CourseInfo from '@/components/StudentPersonal/courseInfo'
import CourseScore from '@/components/StudentPersonal/courseScore'
import TeamPage from '@/components/StudentPersonal/teamPage'
import CreateTeam from '@/components/StudentPersonal/createTeam'
import LeaderTeam from '@/components/StudentPersonal/leaderTeam'
import MemberTeam from '@/components/StudentPersonal/memberTeam'
import StudentSetting from '@/components/StudentPersonal/studentSetting'
//StudentPersonal

import TeacherSetting from '@/components/TeacherPersonal/teacherSetting'
import BacklogPage from '@/components/TeacherPersonal/backlogPage'



import LoginPC from '@/components/PC/loginPC'
import CoursePage from '@/components/PC/coursePage'
import ImportStu from '@/components/PC/TeacherPart/importStudent'
import TeaViewScorePC from '@/components/PC/TeacherPart/teaViewScore'
import TeaExportScorePC from '@/components/PC/TeacherPart/teaExportScore'
import TeaDownloadFilePC from '@/components/PC/TeacherPart/downloadFile'
import TeaDownloadPagePC from '@/components/PC/TeacherPart/downloadPage'
import TeaDownloadBatchPC from '@/components/PC/TeacherPart/downloadBatch'

import StuViewScorePC from '@/components/PC/StudentPart/stuViewScore'

//PC


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
    {
      path: '/PswSetting',
      name: 'PswSetting',
      component: PswSetting
    },
    {
      path: '/MailSetting',
      name: 'MailSetting',
      component: MailSetting
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
      path: '/Seminarppt',
      name: 'Seminarppt',
      component: Seminarppt
    },
    {
      path: '/teacherCouseSeminar',
      name: 'teacherCouseSeminar',
      component: teacherCouseSeminar
    },
    {
      path: '/roundSeting',
      name: 'roundSeting',
      component: teacherSeminar
    },
    {
      path: '/teacherSeminar',
      name: 'teacherSeminar',
      component: teacherSeminar
    },
    {
      path: '/teacherSeminarFinished',
      name: 'teacherSeminarFinished',
      component: teacherSeminarFinished
    },
    {
      path: '/teacherSeminarRunning',
      name: 'teacherSeminarRunning',
      component: teacherSeminarRunning
    },
    {
      path: '/modifySeminar',
      name: 'modifySeminar',
      component: modifySeminar
    },
    {
      path: '/creatSeminar',
      name: 'creatSeminar',
      component: creatSeminar
    },
    {
      path: '/teacherSeminarNotstart',
      name: 'teacherSeminarNotstart',
      component: teacherSeminarNotstart
    },
    {
      path: '/teacherSeminarPause',
      name: 'teacherSeminarPause',
      component: teacherSeminarPause
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

    //SeminarTeacher
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
    {
      path: '/CreateTeam',
      name: 'CreateTeam',
      component: CreateTeam
    },{
      path: '/LeaderTeam',
      name: 'LeaderTeam',
      component: LeaderTeam
    },{
      path: '/MemberTeam',
      name: 'MemberTeam',
      component: MemberTeam
    },{
      path: '/StuSetting',
      name: 'StuSetting',
      component: StudentSetting
    },
    //StudentPersonal
    {
      path: '/TeaSetting',
      name: 'TeacherSetting',
      component: TeacherSetting
    },
    {
      path: '/BacklogPage',
      name: 'BacklogPage',
      component: BacklogPage
    },
    //TeacherPersonal
    {
      path: '/PC',
      name: 'LoginPC',
      component: LoginPC
    },
    {
      path: '/CoursePagePC',
      name: 'CoursePage',
      component: CoursePage
    },
    {
      path: '/ImportStuPC',
      name: 'ImportStu',
      component: ImportStu
    },
    {
      path: '/TeaViewScorePC',
      name: 'TeaViewScorePC',
      component: TeaViewScorePC
    },
    {
      path: '/TeaExportScorePC',
      name: 'TeaExportScorePC',
      component: TeaExportScorePC
    },
    {
      path: '/TeaDownloadFilePC',
      name: 'TeaDownloadFilePC',
      component: TeaDownloadFilePC
    },
    {
      path: '/TeaDownloadPagePC',
      name: 'TeaDownloadPagePC',
      component: TeaDownloadPagePC
    },
    {
      path: '/TeaDownloadBatchPC',
      name: 'TeaDownloadBatchPC',
      component: TeaDownloadBatchPC
    }
    ,
    {
      path: '/StuViewScorePC',
      name: 'StuViewScorePC',
      component: StuViewScorePC
    }
    //PC
  ]
})
