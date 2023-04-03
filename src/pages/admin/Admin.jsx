import React from 'react'
import LayoutAdmin from "components/layout/LayoutAdmin";
import CustomHelmet from "elements/CustomHelmet";

const Admin = () => {
  return (
    <div>

      <LayoutAdmin
            title="관리자 페이지"
      >

      <div>신고된 포스트</div>

      <div>신고된 코멘트</div>

      <div>신고된 계정</div>


      </LayoutAdmin>
      
    </div>
  )
}

export default Admin
