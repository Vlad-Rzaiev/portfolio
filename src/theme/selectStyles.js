export const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'var(--color-background)',
    borderColor: state.isFocused
      ? 'var(--color-border-hover)'
      : 'var(--color-border)',
    color: 'var(--color-text-primary)',
    height: 40,
    borderRadius: 12,
    boxShadow: state.isFocused ? `0 0 0 4px var(--elevation-2)` : 'none',
    transition:
      'background-color 250ms linear, color 250ms linear, border-color 250ms linear, box-shadow 250ms linear',
    cursor: 'pointer',
    padding: 0,
  }),

  valueContainer: base => ({
    ...base,
    padding: 0,
    textAlign: 'center',
  }),

  singleValue: base => ({
    ...base,
    color: 'var(--color-text-primary)',
    transition: 'color 250ms linear',
    margin: 0,
  }),

  placeholder: base => ({
    ...base,
    color: 'var(--color-text-secondary)',
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: 'var(--color-text-primary)',
    transition: 'color 250ms linear, transform 250ms linear',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    padding: '0 8px',
    cursor: 'pointer',
  }),

  indicatorsContainer: base => ({
    ...base,
    alignItems: 'center',
  }),

  indicatorSeparator: base => ({
    ...base,
    width: 1,
  }),

  clearIndicator: base => ({
    ...base,
    color: 'var(--color-muted)',
    padding: '0 8px',
    cursor: 'pointer',
  }),

  menu: base => ({
    ...base,
    borderRadius: 12,
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text-primary)',
    boxShadow: '0 8px 24px var(--elevation-2)',
    transition:
      'background-color 250ms linear, color 250ms linear, box-shadow 250ms linear',
    overflow: 'hidden',
  }),

  menuList: base => ({
    ...base,
    padding: 6,
    textAlign: 'center',
    maxHeight: '320px',
  }),

  option: (base, state) => {
    const optionBackground = state.isSelected
      ? 'var(--color-option-selected)'
      : state.isFocused
      ? 'var(--color-option-focus)'
      : 'transparent';

    const optionColor = 'var(--color-text-primary)';

    return {
      ...base,
      borderRadius: 8,
      padding: '10px 12px',
      marginTop: '8px',
      backgroundColor: optionBackground,
      color: optionColor,
      cursor: 'pointer',
      transition: 'background-color 250ms linear, color 250ms linear',
      outline: state.isFocused
        ? `2px solid var(--color-focus-outline)`
        : 'none',
      outlineOffset: state.isFocused ? 2 : 0,
      fontWeight: state.isSelected ? 600 : 400,
    };
  },

  noOptionsMessage: base => ({
    ...base,
    color: 'var(--color-muted)',
    padding: '8px 12px',
    textAlign: 'center',
  }),

  loadingMessage: base => ({
    ...base,
    color: 'var(--color-muted)',
    padding: '8px 12px',
    textAlign: 'center',
  }),

  multiValue: base => ({
    ...base,
    backgroundColor: 'var(--color-surface-hover)',
    borderRadius: 8,
    padding: '2px 6px',
    margin: '2px',
    display: 'inline-flex',
    alignItems: 'center',
  }),
  multiValueLabel: base => ({
    ...base,
    color: 'var(--color-text-primary)',
    padding: '0 6px',
    fontSize: '0.9rem',
  }),
  multiValueRemove: base => ({
    ...base,
    color: 'var(--color-muted)',
    cursor: 'pointer',
    padding: '0 6px',
    ':hover': {
      color: 'var(--color-error)',
      backgroundColor: 'transparent',
    },
  }),

  container: base => ({
    ...base,
    width: 140,
  }),
};
