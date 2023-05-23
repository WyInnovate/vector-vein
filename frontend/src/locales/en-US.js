/**
 * @Author: Bi Ying
 * @Date:   2022-05-24 13:48:55
 * @Last Modified by:   Bi Ying
 * @Last Modified time: 2023-05-23 14:25:16
 */
export default {
  lang: 'English',
  meta: {
    'title': 'VectorVein',
    'description': 'A brand new knowledge base + workflow management system',
  },
  router: {
    base: 'VectorVein',
    basic: {
      children: {
        'index': 'Index',
      }
    },
    workspace: {
      children: {
        'workflow_space': 'My workflow space',
        'data_space': 'My data space',
        'workflow_main': 'Workflow main',
        'workflow_use': 'Workflow use',
        'workflow_template': 'Workflow template',
        'database_detail': 'Database detail',
      }
    },
    account: {
      children: {
        'info': 'My Account Info',
        'settings': 'My Account Settings',
      }
    },
    user: {
      children: {
        'login': 'Login',
        'register': 'Register',
        'register_result': 'Register result',
      }
    },
  },
  common: {
    'vector_vein': 'VectorVein',
    'time_length': '{hours} Hours {minutes} Minutes',
    'refresh': 'Refresh',
    'index': 'Index',
    'update_log': 'Update log',
    'my': 'My',
    'all': 'All',
    'add': 'Add',
    'create': 'Create',
    'status': 'Status',
    'tags': 'Tags',
    'action': 'Action',
    'output': 'Output',
    'support_inquiries': 'Support inquiries: ',
    'notice': 'Notice',
    'ok': 'OK',
    'save': 'Save',
    'pay_channel': 'Payment method',
    'credits': 'Credits',
    'total_price': 'Total price',
    'total_credits': 'Total credits',
    'bonus_credits': 'Bonus credits',
    'available_credits': 'Available credits',
    'pay': 'Pay',
    'warning': 'Warning',
    'copy_success': 'Copy success',
    'alipay': 'Alipay',
    'wechatpay': 'Wechatpay',
    'create_time': 'Create time',
    'update_time': 'Update time',
    'update_time_format': 'Update time: {time}',
  },
  email: {
    verify: {
      'email_verify_success': 'Email verify success!',
      'email_verify_success_subtitle': 'Your email has been verified successfully, check the courses now!',
      'check_control_panel': 'Check control panel',
      'email_verify_failed': 'Email verify failed!',
      'email_verify_failed_subtitle': 'There is an error in the verification link, please recheck and refresh.',
      'email_verify_expired_subtitle': 'This link has expired. Please resend the verification email.',
      'resend_email': 'Resend email',
      'email_already_verified': 'Email already verified!',
      'email_already_verified_subtitle': 'This link is verified, please login directly',
      'please_verify_your_email': 'Please verify your email',
      'please_verify_your_email_subtitle': 'To keep your account safe, we need to verify your email address: ',
      'sending_failed': 'Sending failed',
      'too_frequently_resend': 'Your emails are being sent too often, please try again later',
      'sending_successfull': 'Sending successfull',
      'please_relogin_after_verify': 'Please re-login after successful verification',
    }
  },
  userAuth: {
    common: {
      'please_enter': 'Please enter ',
      'username': 'Username',
      'email': 'Email',
      'mobile': 'Mobile',
      'verification_code': 'Verification code',
      'send_verification_code': 'Send verification code',
      'password': 'Password',
      'login': 'Login',
      'logout': 'Logout',
      'or': 'or',
      'register': 'Register',
      'sign_up': 'Sign up',
      'ref_code': 'Referral code(optional)',
      'error': 'Server error',
    },
    login: {
      'please_enter_username': 'Please enter username',
      'please_enter_email': 'Please enter email',
      'please_enter_password': 'Please enter password',
      'remember_account': 'Remember me',
      'forget_password': 'Forget password',
      'account_not_exists_title': 'Password incorrect or account not exists',
      'account_not_exists_content': 'Please check if your account password is correct or register a new account.',
      'mobileLogin': 'Mobile login',
      'wechatLogin': 'Wechat login',
      'email_login': 'Email login',
    },
    register: {
      'region_search_or_select': 'Region (search or select)',
      'please_select_your_region': 'Please select your region',
      'human_verification_error': 'Human verification error!',
      'connection_error': 'Connection error!',
      'email_already_exists': 'Email already registered! Please login directly.',
      'username_already_exists': 'Username already used!',
      'register_success': 'Register success! Please verify your email.',
    },
    registerResult: {
      'check_email': 'Check email',
      'back_to_login': 'Back to login',
      'verification_email_sent': 'The activation email has been sent to your email address, and the email is valid for 24 hours. Please log in to your mailbox in time and click the link in the email to activate your account.',
      'your_email_account_register_success': 'Your account {email} registered successfully!',
    },
    forgetPassword: {
      'verify_email': 'Verify email',
      'enter_new_password': 'Enter new password',
      'verify': 'Verify',
      'verification_code_send_success': 'Verification code sent',
      'human_verification_error': 'Human verification error!',
      'connection_error': 'Connection error!',
      'email_not_exists': 'Email not exists!',
      'reset_password': 'Reset password',
      'reset_success': 'Reset success! Please login.',
    }
  },
  userAccount: {
    accountInfo: {
      'my_account': 'My account',
      'my_credits': 'My credits',
    },
    accountSettings: {
      'account_email': 'Account email',
      'account_settings': 'Account settings',
    }
  },
  workspace: {
    workflowSpace: {
      'workflow_index': 'Workflow index',
      'user_fast_access_workflows': 'Fast access workflows',
      'add_new_workflow': 'Add new workflow',
      'new_workflow': 'New workflow',
      'share_workflow': 'Share',
      'clone_workflow': 'Clone',
      'clone_success': 'Clone success',
      'clone_failed': 'Clone failed',
      'add_to_fast_access': 'Add to fast access',
      'add_to_fast_access_confirm': 'Confirm to add the workflow to fast access?',
      'delete_from_fast_access': 'Delete from fast access',
      'delete_from_fast_access_confirm': 'Confirm to delete the workflow from fast access?',
      'add_to_fast_access_success': 'Add to fast access success',
      'add_to_fast_access_failed': 'Add to fast access failed',
      'delete_from_fast_access_success': 'Delete from fast access success',
      'delete_from_fast_access_failed': 'Delete from fast access failed',
      'update_time': 'Update time: {time}',
      'inputs': 'Inputs',
      'outputs': 'Outputs',
      'triggers': 'Triggers',
      'run': 'Run',
      'edit': 'Edit',
      'delete': 'Delete',
      'delete_confirm': 'Confirm to delete the workflow?',
      'delete_success': 'Delete success',
      'delete_failed': 'Delete failed',
      'save_success': 'Save success',
      'save_failed': 'Save failed',
      'get_workflow_failed': 'Get workflow failed',
      'submit_workflow_success': 'Submit workflow request success',
      'submit_workflow_failed': 'Submit workflow request failed',
      'run_workflow_success': 'Run workflow success',
      'run_workflow_failed': 'Run workflow failed',
      'update_schedule_success': 'Update schedule success',
      'update_schedule_failed': 'Update schedule failed',
      'delete_schedule_trigger_confirm': 'Confirm to delete the schedule trigger?',
      'delete_schedule_success': 'Delete schedule success',
      'delete_schedule_failed': 'Delete schedule failed',
      'brief': 'Brief',
      'field_is_empty': '{field} is empty',
    },
    workflowSpaceMain: {
      'my_workflows': 'My workflows',
      'workflow_title': 'Workflow',
      'tags': 'Tags',
      'tags_filter': 'Tags filter',
      'update_time': 'Update time',
      'create_workflow': 'Create workflow',
      'official_workflow_template': 'Official workflow template',
      'community_workflow_template': 'Community workflow template',
    },
    workflowTemplate: {
      'template': 'Template',
      'add_to_my_workflows': 'Add to my workflows',
      'add_success': 'Add success',
      'add_failed': 'Add failed',
      'author': 'Author: {author}',
      'used_count': '{count} people have used',
      'workflow_template_tags': 'Workflow template tags',
      'edit_template': 'Edit template',
      'update_success': 'Update success',
      'update_failed': 'Update failed',
    },
    dataSpace: {
      'create': 'Create',
      'create_success': 'Create success',
      'create_failed': 'Create failed',
      'databaseName': 'Database name',
      'status_invalid': 'Invalid',
      'status_expired': 'Expired',
      'status_deleted': 'Deleted',
      'status_valid': 'Valid',
      'status_error': 'Error',
      'status_creating': 'Creating',
      'status_deleting': 'Deleting',
      'delete': 'Delete',
      'delete_confirm': 'Confirm to delete the database? It cannot be restored after deletion!',
      'delete_success': 'Delete success',
      'delete_failed': 'Delete failed',
    },
    databaseDetail: {
      'add_object': 'Add object',
      'object_title': 'Object title',
      'object_source_url': 'Object source url',
      'object_type': 'Object type',
      'add_method': 'Add method',
      'add_method_url': 'Add from url',
      'add_method_files': 'Upload files',
      'add_method_text': 'Input text',
      'crawl_data_from_url': 'Crawl data from url',
      'use_oversea_crawler': 'Use oversea crawler',
      'object_content': 'Object content',
      'content_empty': 'Content empty!',
      'create_success': 'Add success',
      'create_failed': 'Add failed',
      'delete_success': 'Delete success',
      'delete_failed': 'Delete failed',
      'check_detail_data': 'Check detail data',
      'source_url': 'Source link',
      'data_type': 'Data type',
      'data_type_TEXT': 'Text',
      'data_type_IMAGE': 'Image',
      'data_type_AUDIO': 'Audio',
      'data_type_VIDEO': 'Video',
      'data_type_OTHER': 'Other',
      'delete_confirm': 'Confirm to delete this data?',
      'delete': 'Delete',
    },
  },
  components: {
    layout: {
      basicHeader: {
        'workflow_space': 'Workflow',
        'data_space': 'Data',
      },
      settingDrawer: {
        'open': 'Open setting',
        'close': 'Close setting',
        'save': 'Save setting',
        'save_success': 'Save success',
        'my_setting': 'My setting',
        'openai_api_type': 'OpenAI API type',
        'openai': 'OpenAI',
        'azure': 'Azure',
        'openai_api_key': 'OpenAI API Key',
        'openai_api_base': 'OpenAI API Base',
        'openai_chat_engine': 'OpenAI Chat Engine',
        'openai_embedding_engine': 'OpenAI Embedding Engine',
        'output_folder': 'Output folder',
        'select_folder': 'Select folder',
        'email_settings': 'Email settings',
        'email_user': 'Email user',
        'email_password': 'Email password',
        'email_smtp_host': 'SMTP host',
        'email_smtp_port': 'SMTP port',
        'email_smtp_ssl': 'SMTP SSL',
      },
      helpDropdown: {
        'help': 'Help',
        'about': 'About',
        'software_update': 'Software update',
        'check_update': 'Check update',
        'update_available': 'Update available',
        'new_version': 'New version {version} {releaseDatetime}',
        'about_vectorvein': 'About VectorVein',
        'about_vectorvein_description': '### Build Your Automated Workflow with the Power of AI\n#### Create powerful workflows with drag-and-drop functionality, no programming required.\n\nThe open-source version of VectorVein, developed by MakerBi, is available for personal use only and cannot be used for commercial purposes.',
      },
    },
    markdownEditor: {
      'raw_text': 'Raw text',
      'markdown_text': 'Markdown text',
    },
    workspace: {
      workflowEditor: {
        'add_node': 'Add node',
        'add_tag': 'Add tag',
        'brief_editor': 'Brief editor',
        'brief_images': 'Brief images',
      },
      uploaderFieldUse: {
        'upload': 'Upload',
        'upload_success': '{file} upload success',
        'upload_failed': '{file} upload failed',
        'uploader_text': 'Click or drag file to this area to upload',
        'uploader_hint': 'Currently supported file types: {fileTypes}',
      },
      mindmapRenderer: {
        'download_svg': 'Download svg',
      },
      newWorkflowModal: {
        'create_new_workflow': 'Create new workflow',
        'empty_workflow': 'Create empty workflow',
      },
      shareWorkflowModal: {
        'share_workflow': 'Share workflow',
        'title': 'Title',
        'description': 'Description',
        'description_min_require': 'Description requires at least {count} characters',
        'description_hint1': 'Introduce the purpose, input and output of the workflow so that other users can better understand the workflow.',
        'description_hint2': 'Support Markdown format.',
        'share_to_community': 'Share to community',
        'share_to_community_description': 'After sharing to the community, other users can search for the workflow in the community. Otherwise, it can only be accessed through the shared link.',
        'share_success': 'Share success',
      },
      tagInput: {
        'select_tags': 'Select tags',
      },
      workflowRunRecordsDrawer: {
        'workflows_run_records': 'Workflows run records',
        'my_workflows_run_records': 'My workflows run records',
        'start_time': 'Start',
        'end_time': 'End',
        'used_credits': 'Used credits',
        'status': 'Status',
        'status_not_started': 'Not started',
        'status_queued': 'Queued',
        'status_running': 'Running',
        'status_finished': 'Finished',
        'status_failed': 'Failed',
        'check_record': 'Check record',
      },
    },
    codeEditorModal: {
      'title': 'Code editor',
      'please_enter_code': 'Please enter the code, the function name is fixed to main, and the input parameters should be consistent with the set name.',
    },
    nodes: {
      baseField: {
        'show_in_use_interface': 'Whether to display in the use interface',
        'show': 'Show',
        'hide': 'Hide',
      },
      listField: {
        'add_item': 'Add item',
      },
      fileProcessing: {
        'title': 'File processing',
        FileLoader: {
          'title': 'Read file',
          'description': 'Read the contents of the file.',
          'files': 'File',
          'output': 'Output',
        },
      },
      textProcessing: {
        title: 'Text processing',
        TemplateCompose: {
          'title': 'Template compose',
          'description': 'Compose the text according to the template.',
          'template': 'Template',
          'output': 'Output',
          'add_field': 'Add field',
          'add_field_type': 'Add field type',
          'field_type_input': 'Single line input box',
          'field_type_textarea': 'Multi-line input box',
          'add_field_display_name': 'Display name',
          'click_to_add_to_template': 'Click to add variables to the template',
        },
        MarkdownToHtml: {
          'title': 'Markdown to HTML',
          'description': 'Convert Markdown to HTML.',
          'markdown': 'Markdown',
          'html': 'HTML',
        },
        TextSplitters: {
          'title': 'Text splitters',
          'description': 'Split the text into multiple texts according to the specified method.',
          'text': 'Text',
          'split_method': 'Split method',
          'split_method_general': 'General',
          'chunk_length': 'Chunk length',
          'output': 'Output',
        },
        ListRender: {
          'title': 'List render',
          'description': 'Render the list into text.',
          'list': 'List',
          'add_item': 'Add item',
          'output_type': 'Output type',
          'output_type_text': 'Text',
          'output_type_list': 'List',
          'output': 'Output',
        },
        TextInOut: {
          'title': 'Text in/out',
          'description': 'Output the input text as it is. Used when the same text is needed in multiple places.',
          'text': 'Text',
          'output': 'Output',
        },
      },
      llms: {
        title: 'Language models',
        OpenAI: {
          'title': 'OpenAI',
          'description': 'OpenAI is a non-profit artificial intelligence research company founded in 2015 by Elon Musk, Sam Altman, and Greg Brockman. It is dedicated to ensuring that artificial general intelligence benefits all of humanity.',
          'prompt': 'Prompt',
          'llm_model': 'Model',
          'temperature': 'AI preference (temperature)',
          'creative': 'Creative',
          'balanced': 'Balanced',
          'precise': 'Precise',
          'output': 'Output',
        },
      },
      outputs: {
        title: 'Outputs',
        Text: {
          'title': 'Text',
          'description': 'Used to present text in the user interface.',
          'text': 'Text content',
          'output_title': 'Text title (used to distinguish modules in the use interface)',
          'render_markdown': 'Render Markdown',
          'output': 'Output',
        },
        Email: {
          'title': 'Email',
          'description': 'Used to send emails.',
          'to_email': 'To email',
          'subject': 'Subject',
          'content_html': 'Content HTML',
        },
        Document: {
          'title': 'Document',
          'description': 'Used to generate documents.',
          'file_name': 'File name',
          'content': 'Content (text type is recommended to enter Markdown format content)',
          'export_type': 'Export type',
          'output_type': 'Output type',
          'output_type_only_path': 'Only path',
          'output_type_markdown': 'Markdown',
          'output_type_html': 'HTML',
          'output': 'Output',
        },
        Audio: {
          'title': 'Audio',
          'description': 'Used to generate audio files.',
          'content': 'Content',
          'show_player': 'Show player',
          'output_type': 'Output type',
          'output_type_only_link': 'Only link',
          'output_type_markdown': 'Markdown',
          'output_type_html': 'HTML',
          'show_local_file': 'Show local file',
          'output': 'Output',
        },
        Mindmap: {
          'title': 'Mindmap',
          'description': 'Used to generate mind maps.',
          'content': 'Markdown content',
          'show_mind_map': 'Show mind map',
          'output_type': 'Output type',
          'output': 'Output',
        },
      },
      webCrawlers: {
        title: 'Web crawlers',
        TextCrawler: {
          'title': 'Text crawler',
          'description': 'Used to crawl text from web pages.',
          'url': 'URL',
          'output_type': 'Output type',
          'text': 'Text',
          'json': 'JSON',
          'use_oversea_crawler': 'Use crawler outside China',
          'output_text': 'Web page text',
          'output_title': 'Web page title',
        },
        BilibiliCrawler: {
          'title': 'Bilibili crawler',
          'description': 'Used to crawl videos from Bilibili.',
          'url_or_bvid': 'URL or BVID',
          'output_type': 'Output type',
          'str': 'String',
          'list': 'List',
          'output_subtitle': 'Subtitle',
          'output_title': 'Title',
        },
      },
      triggers: {
        title: 'Triggers',
        ButtonTrigger: {
          'title': 'Button trigger',
          'description': 'Used to trigger workflow runs. As a special node, it can be used without connecting to other nodes.',
          'button_text': 'Button text',
          'run': 'Run',
          'output': 'Output',
        },
        ScheduleTrigger: {
          'title': 'Scheduled Trigger',
          'description': 'Used to trigger workflow runs at specified times.',
          'schedule': 'Schedule',
          'schedule_settings': 'Schedule settings',
          'save_schedule_settings': 'Save schedule settings',
          'output': 'Output',
        },
      },
      vectorDb: {
        title: 'Vector database',
        AddData: {
          'title': 'Add data',
          'description': 'Used to add data to the vector database.',
          'text': 'Text',
          'content_title': 'Title',
          'source_url': 'Source URL',
          'data_type': 'Data type',
          'database': 'Database',
          'split_method': 'Split method',
          'split_method_general': 'General',
          'chunk_length': 'Chunk length',
          'output': 'Output',
          'object_id': 'Object ID',
        },
        DeleteData: {
          'title': 'Delete data',
          'description': 'Used to delete data from the vector database.',
          'object_id': 'Object ID',
          'database': 'Database',
          'delete_success': 'Delete success',
        },
        Search: {
          'title': 'Search',
          'description': 'Used to search for data in the vector database. The search results are sorted by similarity.',
          'search_text': 'Search text',
          'data_type': 'Data type',
          'database': 'Database',
          'count': 'Search results count',
          'output_type': 'Output type',
          'text': 'Text',
          'list': 'List',
          'output': 'Output',
        },
      },
      tools: {
        title: 'Tools',
        ProgrammingFunction: {
          'title': 'Programming function',
          'description': 'Used to run code.',
          'language': 'Language',
          'code': 'Code',
          'open_editor': 'Open code editor',
          'add_parameter': 'Add parameter',
          'add_parameter_type': 'Parameter type',
          'parameter_type_str': 'String',
          'parameter_type_int': 'Integer',
          'parameter_type_float': 'Float',
          'parameter_type_bool': 'Boolean',
          'parameter_type_list': 'List',
          'add_parameter_name': 'Parameter name',
          'output': 'Output',
        },
      },
      controlFlows: {
        title: 'Control flows',
        Empty: {
          'title': 'Empty node',
          'description': 'Used in cases where it is necessary to ensure that the workflow is executed in order.',
          'input': 'Input',
          'output': 'Output (does not change the value of the connected node)',
        },
        Conditional: {
          'title': 'Conditional',
          'description': 'Used to execute different modules according to different conditions.',
          'field_type': 'Data type',
          'field_type_string': 'String',
          'field_type_number': 'Number',
          'left_field': 'Left data',
          'right_field': 'Right data',
          'operator': 'Condition judgment operator',
          'operator_equal': 'Equal',
          'operator_not_equal': 'Not equal',
          'operator_greater_than': 'Greater than',
          'operator_less_than': 'Less than',
          'operator_greater_than_or_equal': 'Greater than or equal',
          'operator_less_than_or_equal': 'Less than or equal',
          'operator_include': 'Left include right',
          'operator_not_include': 'Left not include right',
          'operator_is_empty': 'Is empty',
          'operator_is_not_empty': 'Is not empty',
          'operator_starts_with': 'Left starts with right',
          'operator_ends_with': 'Left ends with right',
          'true_output': 'Output when the condition is met',
          'false_output': 'Output when the condition is not met',
          'output': 'Output',
        },
      },
    },
  },
  layouts: {
    workspaceLayout: {
      tour: {
        'workflow_button_title': 'Switch to workflow interface',
        'workflow_button_description': 'Click this button to switch to the workflow interface. Your workflows and official templates can be found here.',
        'database_button_title': 'Switch to database interface',
        'database_button_description': 'Click this button to switch to the database interface. You can create your personal knowledge base here and upload your data for use in workflows.',
      },
    },
  },
}
