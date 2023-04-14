import { syncTables } from "../js/class/User.js"
import { newRole } from "../js/class/Role.js"

await syncTables()

await newRole('Admin')
await newRole('Client')