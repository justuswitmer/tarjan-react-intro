import React, { Component } from 'react';
class PictureGallery extends Component {
    state = {
        photoWidth: 200,
        photoHeight: 200
    }
    render() {
        return (
            <div>
                <img src="https://picsum.photos/id/1020/200/200" alt="" />
                <img src={`https://picsum.photos/id/1020/${this.state.photoWidth}/${this.state.photoHeight}`} alt="" />
                <img src="https://picsum.photos/id/1024/200/200" alt="" />
                <img src="https://picsum.photos/id/1018/200/200" alt="" />
                <img src="https://picsum.photos/id/1003/200/200" alt="" />
                <img src="https://picsum.photos/id/238/200/200" alt="" />
                <img src="https://picsum.photos/id/237/200/200" alt="" />
            </div>
        );
    }
}


export default PictureGallery;
