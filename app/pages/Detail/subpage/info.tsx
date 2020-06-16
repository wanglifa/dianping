import * as React from 'react'
import {useEffect, useState} from 'react';
import DetailInfo from '../../../components/DetailInfo';
import {getInfoData} from '../../../fetch/detail/detail';
interface Prop {
  id: string | number;
}
const Info: React.FC<Prop> = (props) => {
  const [info, setInfo] = useState(false)
  useEffect(() => {
    getInfoData(props.id)
      .then(res => {
        return res.json()
      }).then(json => {
        setInfo(json)
      })
  }, [])
  return (
    <div>
      {info ? <DetailInfo data={info}/> : ''}
    </div>
  )
}
export default Info;