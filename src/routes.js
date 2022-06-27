import HomeView from './components/HomeView.vue'
import UserListView from './components/user/UserListView.vue'
import UserRegistrationView from './components/user/UserRegistrationView.vue'

export const routes = [ 
  { path: '/', component: HomeView },
  { path: '/user-list', component: UserListView },
  { path: '/user-update/:uuid', component: UserRegistrationView, props: true },
  { path: '/user-registration', component: UserRegistrationView },
]
