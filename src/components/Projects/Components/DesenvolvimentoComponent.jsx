import React from 'react'
import {useTranslation} from 'react-i18next'

const DesenvolvimentoComponent = () => {
  const {t} = useTranslation()
  return (
    <div className="no-projects" style={{marginTop:'50px'}}>{t("No Projects...")}</div>
  )
}

export default DesenvolvimentoComponent