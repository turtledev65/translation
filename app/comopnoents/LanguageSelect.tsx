import { forwardRef } from "react"

interface Props {
  className?: string;
}

const LanguageSelect = forwardRef<HTMLSelectElement, Props>(({ className }, ref) => {
  return (
    <select ref={ref} defaultValue="" className={`p-2 rounded-lg bg-gray-50 ${className}`}>
      <option value="" disabled>Language</option>
      {languages.map(language => <option value={language.code} key={language.code}>{language.label}</option>)}
    </select>
  )
})

const languages = [
  { label: 'Arabic', code: 'ar_AR' },
  { label: 'Czech', code: 'cs_CZ' },
  { label: 'German', code: 'de_DE' },
  { label: 'English', code: 'en_XX' },
  { label: 'Spanish', code: 'es_XX' },
  { label: 'Estonian', code: 'et_EE' },
  { label: 'Finnish', code: 'fi_FI' },
  { label: 'French', code: 'fr_XX' },
  { label: 'Gujarati', code: 'gu_IN' },
  { label: 'Hindi', code: 'hi_IN' },
  { label: 'Italian', code: 'it_IT' },
  { label: 'Japanese', code: 'ja_XX' },
  { label: 'Kazakh', code: 'kk_KZ' },
  { label: 'Korean', code: 'ko_KR' },
  { label: 'Lithuanian', code: 'lt_LT' },
  { label: 'Latvian', code: 'lv_LV' },
  { label: 'Burmese', code: 'my_MM' },
  { label: 'Nepali', code: 'ne_NP' },
  { label: 'Dutch', code: 'nl_XX' },
  { label: 'Romanian', code: 'ro_RO' },
  { label: 'Russian', code: 'ru_RU' },
  { label: 'Sinhala', code: 'si_LK' },
  { label: 'Turkish', code: 'tr_TR' },
  { label: 'Vietnamese', code: 'vi_VN' },
  { label: 'Chinese', code: 'zh_CN' },
  { label: 'Afrikaans', code: 'af_ZA' },
  { label: 'Azerbaijani', code: 'az_AZ' },
  { label: 'Bengali', code: 'bn_IN' },
  { label: 'Persian', code: 'fa_IR' },
  { label: 'Hebrew', code: 'he_IL' },
  { label: 'Croatian', code: 'hr_HR' },
  { label: 'Indonesian', code: 'id_ID' },
  { label: 'Georgian', code: 'ka_GE' },
  { label: 'Khmer', code: 'km_KH' },
  { label: 'Macedonian', code: 'mk_MK' },
  { label: 'Malayalam', code: 'ml_IN' },
  { label: 'Mongolian', code: 'mn_MN' },
  { label: 'Marathi', code: 'mr_IN' },
  { label: 'Polish', code: 'pl_PL' },
  { label: 'Pashto', code: 'ps_AF' },
  { label: 'Portuguese', code: 'pt_XX' },
  { label: 'Swedish', code: 'sv_SE' },
  { label: 'Swahili', code: 'sw_KE' },
  { label: 'Tamil', code: 'ta_IN' },
  { label: 'Telugu', code: 'te_IN' },
  { label: 'Thai', code: 'th_TH' },
  { label: 'Tagalog', code: 'tl_XX' },
  { label: 'Ukrainian', code: 'uk_UA' },
  { label: 'Urdu', code: 'ur_PK' },
  { label: 'Xhosa', code: 'xh_ZA' },
  { label: 'Galician', code: 'gl_ES' },
  { label: 'Slovene', code: 'sl_SI' }
];

export default LanguageSelect
