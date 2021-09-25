function nacrtajScenu(){

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 
        window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometrija_krofne =  new THREE.TorusGeometry(20, 5, 4, 3);
    const materijal = new THREE.MeshBasicMaterial({color: 0xffff00});
    const krofna = new THREE.Mesh(geometrija_krofne, materijal);
    scene.add(krofna);


    camera.position.z = 50;

    function animate() {
        krofna.rotation.x += 0.01;
        krofna.rotation.y += 0.01;

        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }
    animate();

}