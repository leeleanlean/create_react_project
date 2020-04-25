import { observable, action, configure } from 'mobx'

configure({ enforceActions: 'observed' })

class Common {
  @observable userInfo = {
    name: 'lean',
    age: 10
  }

  @action changeName = name => {
    this.userInfo.name = name
  }
}

export default new Common()
