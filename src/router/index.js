import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LoginPart/login'
import ActiveT from '@/components/LoginPart/activeTeacher'
import ActiveS from '@/components/LoginPart/activeStudent'
import PswSetting from '@/components/LoginPart/pswSetting'
import MailSetting from '@/components/LoginPart/mailSetting'
import ForgetPsw from '@/components/LoginPart/forgetPsw'
//LoginPart
import roundSeting from '@/components/SeminarTeacher/roundSeting'
import Seminarppt from '@/components/SeminarTeacher/Seminarppt'
import teacherCourseSeminar from '@/components/SeminarTeacher/teacherCouseSeminar'
import teacherSeminarFinished from '@/components/SeminarTeacher/teacherSeminarFinished'
import seminarQuestionScore from '@/components/SeminarTeacher/seminarQuestionScore'
import TeacherSeminar from '@/components/SeminarTeacher/teacherSeminar'
import SeminarProceed from '@/components/SeminarTeacher/seminarProceed'
import SeminarChangePScore from '@/components/SeminarTeacher/seminarChangePScore'
import ChangeReportScore from '@/components/SeminarTeacher/changeReportScore'
import SeminarQuestionScore from '@/components/SeminarTeacher/seminarQuestionScore'
import ViewReportScore from '@/components/SeminarTeacher/viewReportScore'
import ViewScore from '@/components/SeminarTeacher/viewScore'
import creatSeminar from '@/components/SeminarTeacher/creatSeminar'
import modifySeminar from '@/components/SeminarTeacher/modifySeminar'
//SeminarTeacher
import seminarFinishedSigned from '@/components/studentSeminar/seminarFinishedSigned'
import seminarUnstartUnsigned from '@/components/studentSeminar/seminarUnstartUnsigned '
import StudentCourseSeminar from '@/components/studentSeminar/StudentCourseSeminar'
import studentSeminar from '@/components/studentSeminar/studentSeminar'
import studentSeminarFinishedSignedNotReport from '@/components/studentSeminar/studentSeminarFinishedSignedNotReport'
import studentSeminarNotStartSigned from '@/components/studentSeminar/studentSeminarNotstartSigned'
import studentSeminarPre from '@/components/studentSeminar/studentSeminarPre'
import studentSeminarRunning from '@/components/studentSeminar/studentSeminarRunning'
import studentSeminarRunningSigned from '@/components/studentSeminar/studentSeminarRunningSigned'
import studentSeminarViewScore from '@/components/studentSeminar/studentSeminarViewScore'
import studentViewPpt from '@/components/studentSeminar/studentViewPpt'
import ViewDeatilsAndSignUp from '@/components/studentSeminar/ViewDeatilsAndSignUp'
//SeminarStudent
import StuPersonCenter from '@/components/StudentPersonal/stuPersonalCenter'
import StudentCourse from '@/components/StudentPersonal/studentCourse'
import CourseInfo from '@/components/StudentPersonal/courseInfo'
import CourseScore from '@/components/StudentPersonal/courseScore'
import TeamPage from '@/components/StudentPersonal/teamPage'
import CreateTeam from '@/components/StudentPersonal/createTeam'
import MemberTeam from '@/components/StudentPersonal/memberTeam'
import StudentSetting from '@/components/StudentPersonal/studentSetting'
//StudentPersonal

import TeaPersonCenter from '@/components/TeacherPersonal/teaPersonalCenter'
import TeacherSetting from '@/components/TeacherPersonal/teacherSetting'
import BacklogPage from '@/components/TeacherPersonal/backlogPage'
import classmessage from '@/components/TeacherPersonal/classmessage'
import courseManage from '@/components/TeacherPersonal/courseManage'
import createClass from '@/components/TeacherPersonal/createClass'
import createCourse from '@/components/TeacherPersonal/createCourse'
import newShare from '@/components/TeacherPersonal/newShare'
import shareSeting from '@/components/TeacherPersonal/shareSeting'
import studentScore from '@/components/TeacherPersonal/studentScore'
import teacherSetting from '@/components/TeacherPersonal/teacherSetting'
import teacherStudentTeam from '@/components/TeacherPersonal/teacherStudentTeam'
import teamRequirementSetting from '@/components/TeacherPersonal/teamRequirementSetting'

//teacherpersonal

import LoginPC from '@/components/PC/loginPC'
import CoursePage from '@/components/PC/coursePage'
import ImportStu from '@/components/PC/TeacherPart/importStudent'
import TeaViewScorePC from '@/components/PC/TeacherPart/teaViewScore'
import TeaExportScorePC from '@/components/PC/TeacherPart/teaExportScore'
import TeaDownloadFilePC from '@/components/PC/TeacherPart/downloadFile'
import TeaDownloadPagePC from '@/components/PC/TeacherPart/downloadPage'
import TeaDownloadBatchPC from '@/components/PC/TeacherPart/downloadBatch'
import StuViewScorePC from '@/components/PC/StudentPart/stuViewScore'
import createTeacherAccount from '@/components/PC/PCManager/createTeacherAccount'
import modeifyStudentMessage from '@/components/PC/PCManager/modeifyStudentMessage'
import modeifyTeacherMessage from '@/components/PC/PCManager/modifyTeacherMessage'
import ManagerIndex from '@/components/PC/PCManager/index'
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
      path: '/PswSetting',
      name: 'PswSetting',
      component: PswSetting
    },
    {
      path: '/MailSetting',
      name: 'MailSetting',
      component: MailSetting
    },{
      path: '/ForgetPsw',
      name: 'ForgetPsw',
      component: ForgetPsw
    },
    //LoginPart
    {
      path: '/SeminarProceed',
      name: 'SeminarProceed',
      component: SeminarProceed
    },
    {
      path: '/ChangeReportScore',
      name: 'ChangeReportScore',
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
      component:SeminarQuestionScore
    },
    {
      path: '/Seminarppt',
      name: 'Seminarppt',
      component: Seminarppt
    },
    {
      path: '/TeacherSeminar',
      name: 'TeacherSeminar',
      component: TeacherSeminar

    },
    {
      path: '/roundSeting',
      name: 'roundSeting',
      component: roundSeting

    },
    {
      path: '/teacherSeminarFinished',
      name: 'teacherSeminarFinished',
      component: teacherSeminarFinished
    }, {
      path: '/teacherSeminarIndex',
      name: 'teacherSeminarIndex',
      component: teacherSeminarIndex
    }, {
      path: '/modifySeminar',
      name: 'modifySeminar',
      component: modifySeminar

    },{
      path: '/creatSeminar',
      name: 'creatSeminar',
      component: creatSeminar
    }, {
      path: '/ViewReportScore',
      name: 'viewReportScore',
      component: ViewReportScore
    },
    {
      path: '/ViewScore',
      name: 'viewScore',
      component: ViewScore
    },
    {
      path:'/teacherCourseSeminar',
      name:'teacherCourseSeminar',
      component:teacherCourseSeminar
    },
    //SeminarTeacher
    {
      path: '/seminarFinishedSigned',
      name: 'seminarFinishedSigned',
      component: seminarFinishedSigned
    },
    {
      path: '/seminarUnstartUnsigned',
      name: 'seminarUnstartUnsigned',
      component: seminarUnstartUnsigned
    },
    {
      path: '/StudentCourseSeminar',
      name: 'StudentCourseSeminar',
      component: StudentCourseSeminar
    },
    {

      path: '/studentSeminar',
      name: 'studentSeminar',
      component: studentSeminar

    },
    {
      path: '/studentSeminarFinishedSignedNotReport',
      name: 'studentSeminarFinishedSignedNotReport',
      component: studentSeminarFinishedSignedNotReport
    },
    {
      path: '/studentSeminarNotstartSigned',
      name: 'studentSeminarNotstartSigned',
      component: studentSeminarNotStartSigned
    },
    {
      path: '/studentSeminarPre',
      name: 'studentSeminarPre',
      component: studentSeminarPre
    },
    {
      path: '/studentSeminarRunning',
      name: 'studentSeminarRunning',
      component: studentSeminarRunning
    },
    {
      path: '/studentSeminarRunningSigned',
      name: 'studentSeminarRunningSigned',
      component: studentSeminarRunningSigned
    },
    {
      path: '/studentSeminarViewScore',
      name: 'studentSeminarViewScore',
      component: studentSeminarViewScore
    },
    {
      path: '/studentViewPpt',
      name: 'studentViewPpt',
      component:studentViewPpt
    },
    {
      path: '/ViewDeatilsAndSignUp',
      name: 'ViewDeatilsAndSignUp',
      component:ViewDeatilsAndSignUp
    },
    //SeminarStudent
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
      path: '/classmessage',
      name: 'classmessage',
      component: classmessage
    },
    {
      path: '/courseManage',
      name: 'courseManage',
      component:courseManage
    },
    {
      path: '/CreateClass',
      name: 'CreateClass',
      component:createClass
    },
    {
      path: '/teacherStudentTeam',
      name: 'teacherStudentTeam',
      component:teacherStudentTeam
    },
    {
      path: '/teamRequirementSetting',
      name: 'teamRequirementSetting',
      component:teamRequirementSetting
    },
    {
      path: '/createCourse',
      name: 'createCourse',
      component:createCourse
    },
    {
      path: '/newShare',
      name: 'newShare',
      component:newShare
    },
    {
      path: '/shareSeting',
      name: 'shareSeting',
      component:shareSeting
    },
    {
      path: '/studentScore',
      name: 'studentScore',
      component:studentScore
    },
    {
      path: '/teacherSetting',
      name: 'teacherSetting',
      component:teacherSetting
    },
    {
      path: '/BacklogPage',
      name: 'BacklogPage',
      component: BacklogPage
    },
    {
      path:'/TeaPersonCenter',
      name:'TeaPersonCenter',
      component:TeaPersonCenter
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
      path: '/ChangeReportScore',
      name: 'changeReportScore',
      component: ChangeReportScore
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
    },
    {
      path: '/ManagerIndex',
      name: 'ManagerIndex',
      component: ManagerIndex
    },
    {
      path:'/createTeacherAccount',
      name:'createTeacherAccount',
      component:createTeacherAccount
    },
    {
      path:'/modeifyStudentMessage',
      name:'modeifyStudentMeeeage',
      component:modeifyStudentMessage
    },
    {
      path:'/modeifyTeacherMessage',
      name:'modeifyTeacherMessage',
      component:modeifyTeacherMessage
    },
    //PC
  ]
})
