var krofna;

function azurirajMaterijalPrstena(HTMLCanvas){
    let canvTekstura = new THREE.CanvasTexture(HTMLCanvas);
    const canvMaterijal = new THREE.MeshStandardMaterial({
        map: canvTekstura,
        displacementMap: canvTekstura,
    });
    krofna.material = canvMaterijal;
    krofna.material.needsUpdate = true;
}

function nacrtajScenu(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 
        window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometrija_krofne =  new THREE.TorusGeometry(20, 5, 200, 200);
    const materijal = new THREE.MeshBasicMaterial({color: 0x444444});
    krofna = new THREE.Mesh(geometrija_krofne, materijal);

    const svetlo1 = new THREE.PointLight(0xABD1F3, 20, 100);
    svetlo1.position.set(60, 40, 20);
    const svetlo2 = new THREE.PointLight(0xC72F21, 20, 100);
    svetlo2.position.set(-60, -40, 20);

    scene.add(svetlo1);
    scene.add(svetlo2);
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