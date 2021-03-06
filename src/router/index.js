import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LoginPart/login'
import ActiveT from '@/components/LoginPart/activeTeacher'
import ActiveS from '@/components/LoginPart/activeStudent'
import PswSetting from '@/components/LoginPart/pswSetting'
import MailSetting from '@/components/LoginPart/mailSetting'
import ForgetPsw from '@/components/LoginPart/forgetPsw'
import emptyPage from '@/components/emptyPage'
//LoginPart
import roundSeting from '@/components/SeminarTeacher/roundSeting'
import Seminarppt from '@/components/SeminarTeacher/Seminarppt'
import teacherCourseSeminar from '@/components/SeminarTeacher/teacherCourseSeminar'
import teacherSeminarIndex from '@/components/SeminarTeacher/teacherSeminarIndex'
import TeacherSeminar from '@/components/SeminarTeacher/teacherSeminar'
import SeminarProceed from '@/components/SeminarTeacher/seminarProceed'
import ChangeReportScore from '@/components/SeminarTeacher/changeReportScore'
import ViewScore from '@/components/SeminarTeacher/viewScore'
import creatSeminar from '@/components/SeminarTeacher/creatSeminar'
import modifySeminar from '@/components/SeminarTeacher/modifySeminar'
//SeminarTeacher
import StudentCourseSeminar from '@/components/studentSeminar/StudentCourseSeminar'
import studentSeminar from '@/components/studentSeminar/studentSeminar'
import studentSeminarPre from '@/components/studentSeminar/studentSeminarPre'
import studentSeminarIndex from '@/components/studentSeminar/studentSeminarIndex'
import studentViewPpt from '@/components/studentSeminar/studentViewPpt'
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
import stuViewScore from '@/components/PC/StudentPart/stuViewScore'
import createTeacherAccount from '@/components/PC/PCManager/createTeacherAccount'
import ModeifyStudentMessage from '@/components/PC/PCManager/modeifyStudentMessage'
import ModeifyTeacherMessage from '@/components/PC/PCManager/modifyTeacherMessage'
import ManagerIndex from '@/components/PC/PCManager/index'
import PCseminarIndex from '@/components/PC/TeacherPart/PCseminarIndex'
import TeaOneSeminar from '@/components/PC/TeacherPart/TeaOneSeminar'
import PCseminarSIndex from '@/components/PC/StudentPart/PCseminarSIndex'
import stuOneSeminar from '@/components/PC/StudentPart/stuOneSeminar'
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
      path: '/emptyPage',
      name: 'emptyPage',
      component: emptyPage
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
      path: '/studentSeminarPre',
      name: 'studentSeminarPre',
      component: studentSeminarPre
    },
    {
      path: '/studentSeminarIndex',
      name: 'studentSeminarIndex',
      component: studentSeminarIndex
    },
    {
      path: '/studentViewPpt',
      name: 'studentViewPpt',
      component:studentViewPpt
    },
    //SeminarStudent
    {
      path: '/StuPersonCenter',
      name: 'StuPersonCenter',
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
      path: '/PCseminarSIndex',
      name: 'PCseminarSIndex',
      component: PCseminarSIndex
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
    ,
    {
      path: '/stuViewScore',
      name: 'stuViewScore',
      component: stuViewScore
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
      path:'/ModeifyStudentMessage',
      name:'ModeifyStudentMeeeage',
      component:ModeifyStudentMessage
    },
    {
      path:'/ModeifyTeacherMessage',
      name:'ModeifyTeacherMessage',
      component:ModeifyTeacherMessage
    },
    {
      path:'/PCseminarIndex',
      name:'PCseminarIndex',
      component:PCseminarIndex
    },
    {
      path:'/TeaOneSeminar',
      name:'TeaOneSeminar',
      component:TeaOneSeminar
    },
    {
      path: '/stuOneSeminar',
      name: 'stuOneSeminar',
      component:stuOneSeminar
    },
    //PC
  ]
})
