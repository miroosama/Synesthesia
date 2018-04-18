import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import { connect } from "react-redux"
import { shapeTime } from '../actions/actions'




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
      time: 0,
      found: false
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

  componentDidMount () {
    if(!this.props.currentUser){
      this.props.history.push("/")
    }
  }


  handleClick = (e) => {
    console.log(e.screenX, e.screenY)
    if(e.screenX >= 660 && e.screenX <= 700 && e.screenY >= 470 && e.screenY <= 510){
      console.log("YERRRRRR")
      this.props.shapeTime(this.state.time)
      this.postData()
    }
  }

  postData = () => {
  if(this.state.found == false){
  let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({color: `${this.props.color.color.color}`, food_place: `[{${this.props.foodPlaces.foodPlaces[0].foodPlace.food}: ${this.props.foodPlaces.foodPlaces[0].foodPlace.place}}, {${this.props.foodPlaces.foodPlaces[1].foodPlace.food}: ${this.props.foodPlaces.foodPlaces[1].foodPlace.place}},
  {${this.props.foodPlaces.foodPlaces[2].foodPlace.food}: ${this.props.foodPlaces.foodPlaces[2].foodPlace.place}}, {${this.props.foodPlaces.foodPlaces[3].foodPlace.food}: ${this.props.foodPlaces.foodPlaces[3].foodPlace.place}} ]`, shape_time: `${this.state.time}`, user_id: `${this.props.currentUser.id}` })
};
fetch(`http://localhost:3000/api/v1/results`, options)
.then(res => res.json())
.then(res => this.props.history.push("/data"))
  this.setState({
    found:true
  })
}

}



  componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }
  // componentWillUnmount() {
  //     this.clearInterval(this.timer);
  //   }
  tick = () => {
      this.setState({
        time: this.state.time + 1
      });
    }



  render() {
    console.log(this.state.time)
    console.log(this.props)
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
        widthSegments={2}
        heightSegments={2}
        depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
        <tetrahedronGeometry
          radius={35}
          detail={1}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[24]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[25]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[26]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[27]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[28]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[29]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[30]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[31]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
        />

          <meshBasicMaterial
            wireframe={true}
            color={0x00ff00}
          />
        </mesh>
        <mesh
          rotation={this.state.coneRotation}
          position={this.objectPosition[32]}
        >
        <boxGeometry
          width={50}
          height={50}
          depth={50}
          widthSegments={2}
          heightSegments={2}
          depthSegments={2}
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

const mapStateToProps = state => {
return{
  color: state.color,
  foodPlaces: state.foodPlaces,
  shapeTime: state.shapeTime,
  currentUser: state.user.currentUser
}
}

export default connect(mapStateToProps, { shapeTime })(Numbers);
