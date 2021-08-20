import React from 'react'
import {
    makeStyles,
      Divider, Drawer
} from '@material-ui/core'
const estilos =makeStyles(theme => ({ 
    drawer:{
        width:240,
        flexShrick: 0,
    },
    drawerPaper:{
        width:240,
    },
    toolbar:theme.mixins.toolbar,

}))
const Cajon =() => {

     const classes = estilos()
    return(
           <Drawer
           className ={classes.drawer}   
           variant ="permanent"
           classes ={{
                 paper:classes.drawerPaper,
           }}
           anchor ="left"
           >
                 <div
                 className={classes.toolbar}
                 >
                 </div>
                 <Divider />
             
            </Drawer>

    )
}
export default Cajon