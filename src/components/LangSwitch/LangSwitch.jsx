import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { LANGS } from '../../constants';
import { selectStyles } from '../../theme/selectStyles';
import styles from './LangSwitch.module.css';

export const LangSwitch = () => {
  const { i18n, t } = useTranslation();

  const options = LANGS.map(lang => ({ value: lang.id, label: lang.label }));
  const value =
    options.find(option => option.value === i18n.resolvedLanguage) ||
    options[0];

  const onChange = option => {
    const lng = option?.value;
    if (!lng) return;
    i18n.changeLanguage(lng);
    localStorage.setItem('vrLang', lng);
  };

  return (
    <div className={styles.wrap}>
      <label className={styles.visuallyHidden} htmlFor="lang">
        {t('langSwitch.label')}
      </label>

      <Select
        styles={selectStyles}
        inputId="lang"
        name="lang"
        value={value}
        options={options}
        onChange={onChange}
        isSearchable={false}
        aria-label="Change language"
      />
    </div>
  );
};
