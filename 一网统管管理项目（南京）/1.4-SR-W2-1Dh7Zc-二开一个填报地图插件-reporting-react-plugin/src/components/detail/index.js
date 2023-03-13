import React, { useState } from "react";
import PropTypes from "prop-types";
import {Modal} from 'antd';
import Map from '../Map';
const Preview = ({ data, formConfig,...other }) => {
  const [isModalOpen,setIsModalOpen] = useState(false)
  return <>
    <div 
      style={{display: 'flex',alignItems: 'center',width: 698,height: 150}} 
      onClick={()=>{
        setIsModalOpen(true)
      }}
    > 
      <Map 
        data={data ?? '{}'} zoom={10} isDetail={true} styles={{width: '698px',height: '150px',cursor: 'pointer'}}
      />
    </div>
    {isModalOpen && <Modal 
        width={960} 
        style={{height: '66.7%'}}
        bodyStyle={{
          height: 'calc(100% - 55px)'
        }}
        title="区域或定位点" 
        footer={null}
        wrapClassName="map_modal" 
        open={isModalOpen} 
        onCancel={()=>setIsModalOpen(false)}
      >
        <Map data={data} isDetail={true}/>
      </Modal>
    }
  </>;
};

Preview.propTypes = {
  data: PropTypes.string,
};

export default Preview;
