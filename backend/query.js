import { syncTables, adminUser } from "../js/class/User.js"
import { newRole } from "../js/class/Role.js"


await syncTables()

// await adminUser()
// await newRole('Admin')
// await newRole('Client')