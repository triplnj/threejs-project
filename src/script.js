import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LoadingManager } from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import GUI from "lil-gui"

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// const gui = new GUI()
const fontLoader = new FontLoader()


//Texture
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('onStart')
}
loadingManager.onLoad = () => {
    console.log('onLoad')
}
const textureLoader = new THREE.TextureLoader(loadingManager)
const cubeTextureLoader = new THREE.CubeTextureLoader()
const envirnomentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/3/px.jpg',
    '/textures/environmentMaps/3/nx.jpg',
    '/textures/environmentMaps/3/py.jpg',
    '/textures/environmentMaps/3/ny.jpg',
    '/textures/environmentMaps/3/pz.jpg',
    '/textures/environmentMaps/3/nz.jpg'
])

const colorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load("/textures/matcaps/3.png")
const gradientTexture = textureLoader.load("/textures/gradients/3.jpg")

//Text
const matcapText = textureLoader.load('/textures/matcaps/3.png')

fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            const textGeometry = new TextGeometry(
                    "Dejan Ivkovic \nCreative \nFront End Developer", {
                        font: font,
                        size: 0.7,

                        height: 0.2,
                        curveSegments: 12,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 5
                    }

                )
                // textGeometry.computeBoundingBox()
                // textGeometry.translate(-(textGeometry.boundingBox.max.x - 0.02) * 0.5, -(textGeometry.boundingBox.max.y - 0.02) * 0.5, -(textGeometry.boundingBox.max.z - 0.03) * 0.5)
            textGeometry.center()
            const material = new THREE.MeshMatcapMaterial({ wireframe: true })
            material.matcap = matcapText
            const text = new THREE.Mesh(textGeometry, material)
            scene.add(text)
        }

    )
    //Little donuts
const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
const material = new THREE.MeshMatcapMaterial({ matcap: matcapText })
for (let i = 0; i < 100; i++) {

    const donut = new THREE.Mesh(donutGeometry, material)

    donut.position.x = (Math.random() - 0.5) * 10
    donut.position.y = (Math.random() - 0.5) * 10
    donut.position.z = (Math.random() - 0.5) * 10

    donut.rotation.x = Math.random() * Math.PI
    donut.rotation.y = Math.random() * Math.PI

    const scale = Math.random()
    donut.scale.set(scale, scale, scale)

    scene.add(donut)

}



// gradientTexture.generateMipmaps = false
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
/**
 * Base
 */



/**
 * Object
 */

// const material = new THREE.MeshBasicMaterial()
// material.map = colorTexture
// material.color.set('red')
// material.wireframe = true
// material.opacity = 0.5
// material.transparent = true
// material.alphaMap = alphaTexture
// material.side = THREE.DoubleSide

// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture
// const material = new THREE.MeshDepthMaterial()
// const material = new THREE.MeshLambertMaterial()
// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color(0xff0000)
// const material = new THREE.MeshToonMaterial()
// material.gradientMap = gradientTexture
// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0
// material.roughness = 1
// material.map = colorTexture
// material.aoMap = ambientOcclusionTexture
// material.aoMapIntensity = 6
// material.displacementMap = heightTexture
// material.metalnessMap = metalnessTexture
// material.roughnessMap = roughnessTexture
// material.normalMap = normalTexture
// material.normalScale.set(0.5, 0.5)
// material.transparent = true
// material.alphaMap = alphaTexture

// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0.7
// material.roughness = 0.2
// material.envMap = envirnomentMapTexture

// gui.add(material, 'metalness').min(0).max(1).step(0.0001)
// gui.add(material, "roughness").min(0).max(1).step(0.0001)
// gui.add(material, "aoMapIntensity").min(0).max(10).step(0.0001)
// gui.add(material, "displacementScale").min(0).max(1).step(0.0001)


// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     material
// )
// cube.position.x = 1
// cube.geometry.setAttribute(
//     'uv2',
//     new THREE.BufferAttribute(cube.geometry.attributes.uv.array, 2)
// )

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1, 100, 100),
//     material
// )
// plane.geometry.setAttribute(
//     'uv2',
//     new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
// )
// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.3, 0.2, 64, 128),
//     material
// )
// torus.position.x = 1.5
// torus.geometry.setAttribute(
//     'uv2',
//     new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
// )

// scene.add(cube)

//Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)
const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 0.2

camera.position.z = 0.2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()


    //Update objects
    // cube.rotation.y = elapsedTime * 0.5


    // cube.rotation.x = elapsedTime * 0.5



    // cube.rotation.z = elapsedTime * 0.5





    // Update controls
    controls.update()


    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()