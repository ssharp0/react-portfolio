import Particles from "react-particles-js"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
 particlesCanva: {
  position: 'absolute'
 }
})

const ParticlesBackGround = () => {

 const classes = useStyles()

 return (
  <>
   <Particles
    canvasClassName={classes.particlesCanva}
    params={{
     particles: {
      number: {
       value: 30,
       density: {
        enable: true,
        value_area: 2000
       }
      },
      shape: {
       type: 'octogon',
       stroke: {
        width: 2,
       }
      },
      size: {
       value: 5,
       random: true,
       anim: {
        enable: true,
        sync: true
       }
      },
      opacity: {
       value: 1,
       random: true,
       anim: {
        enable: true,
        opacity_min: 0.1,
        sync: true
       }
      }
     }
    }}
   />
  </>
 )
}

export default ParticlesBackGround