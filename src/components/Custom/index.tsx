import config, { ICustomProps } from './Custom.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Custom.build';
import Render from './Custom.render';

const Custom: T4DComponent<ICustomProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Custom.craft = config.craft;
Custom.info = config.info;
Custom.defaultProps = config.defaultProps;

export default Custom;
