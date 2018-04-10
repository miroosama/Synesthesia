import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class Numbers extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.objectPosition = [
      new THREE.Vector3(0, 0, 125),
      new THREE.Vector3(50,0,125),
      new THREE.Vector3(100,0,125),
      new THREE.Vector3(150,0,125),
      new THREE.Vector3(200,0,125),
      new THREE.Vector3(250,0,125),
      new THREE.Vector3(-50,0,125),
      new THREE.Vector3(-100,0,125),
      new THREE.Vector3(-150,0,125),
      new THREE.Vector3(-200,0,125),
      new THREE.Vector3(-250,0,125),
      new THREE.Vector3(0, 50, 125),
      new THREE.Vector3(50,50,125),
      new THREE.Vector3(100,50,125),
      new THREE.Vector3(150,50,125),
      new THREE.Vector3(200,50,125),
      new THREE.Vector3(250,50,125),
      new THREE.Vector3(-50,50,125),
      new THREE.Vector3(-100,50,125),
      new THREE.Vector3(-150,50,125),
      new THREE.Vector3(-200,50,125),
      new THREE.Vector3(-250,50,125),
      new THREE.Vector3(0, -50, 125),
      new THREE.Vector3(50,-50,125),
      new THREE.Vector3(100,-50,125),
      new THREE.Vector3(150,-50,125),
      new THREE.Vector3(200,-50,125),
      new THREE.Vector3(250,-50,125),
      new THREE.Vector3(-50,-50,125),
      new THREE.Vector3(-100,-50,125),
      new THREE.Vector3(-150,-50,125),
      new THREE.Vector3(-200,-50,125),
      new THREE.Vector3(-250,-50,125)
    ];

    this.state = {
      coneRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend coneRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        coneRotation: new THREE.Euler(
          this.state.coneRotation.x + 0.01,
          this.state.coneRotation.y + 0.01,
          0
        ),
      });
    };
  }

  handleClick = (e) => {
    // console.log(e.screenX, e.screenY)
  }

  render() {
    const width = window.innerWidth * 1; // canvas width
    const height = window.innerHeight * 1; // canvas height
let depth = this.props.shapeSpeed/10
    return (
      <div onMouseMove={this.handleClick}>
      <React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={new THREE.Vector3(0, 0, 1000)}
        />
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[0]}
        >
        <boxGeometry
        width={50}
        height={50}
        depth={50}
        widthSegments={4}
        heightSegments={4}
        depthSegments={4}
      />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[1]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[2]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[3]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[4]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[5]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[6]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[7]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[8]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[9]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[10]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[11]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[12]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[13]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[14]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[15]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[16]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[17]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[18]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[19]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[20]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[21]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[22]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[23]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={4}
          heightSegments={4}
          depthSegments={4}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>
  </div>);
  }
}

export default Numbers;
