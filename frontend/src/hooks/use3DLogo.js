import * as THREE from "three"

export const use3DLogo = () => {
  const threeD = (canvasSpace, texture) => {

    // basic setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x003B95)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1 ,1000)

    const canvas = canvasSpace
    const renderer = new THREE.WebGLRenderer({canvas})

    const {offsetWidth, offsetHeight} = canvas.parentElement
    renderer.setSize(offsetWidth, offsetHeight)

    camera.position.setZ(30)

    renderer.render(scene, camera)

    // lightening
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(5,5,5)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight,ambientLight)

    // add object
    const logoTexture = new THREE.TextureLoader().load(texture)
    const logo = new THREE.Mesh(
      new THREE.BoxGeometry(15,15,15),
      new THREE.MeshBasicMaterial({map:logoTexture})
    )
    scene.add(logo)

    function animate(){
      requestAnimationFrame(animate)
      // rotate logo
      logo.rotation.y += 0.01
      renderer.render(scene,camera)
    }

    animate()
  }

  return {threeD}
}