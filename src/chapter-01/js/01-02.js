function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    //透视
    /**
     * 45: 上面角度
     * window.innerWidth / window.innerHeight：宽高比 物体垂直面
     * 0.9：近端面
     * 1000：远端面
     */
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.9, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    //建立坐标轴 以20为单位
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: "yellow"
    });
    //画出画板物体
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = 0 * Math.PI;
    //设置三维坐标
    plane.position.set(0, 0, 0);

    // add the plane to the scene
    scene.add(plane);

    // create a cube
    // 创建一个getmetry
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        wireframe: true
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // position the cube
    cube.position.set(-4, 3, 0);

    // add the cube to the scene
    scene.add(cube);

    // create a sphere
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x7777FF,
        wireframe: true
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // position the sphere
    sphere.position.set(20, 4, 2);

    // add the sphere to the scene
    scene.add(sphere);


    // position and point the camera to the center of the scene
    camera.position.set(0, 0, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    //渲染只需要放上画面 和 相机
    renderer.render(scene, camera);
}