import {createTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import lightGreen from '@material-ui/core/colors/lightGreen'
const theme = createTheme({
    palette:{
        primary:{
            main: purple[700]
        },
        secondary:{
            main: lightGreen[700]
        }
    }

})
export default  theme