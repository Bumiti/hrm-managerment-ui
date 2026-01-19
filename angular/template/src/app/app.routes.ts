import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/index',
    pathMatch: 'full'
  },
  //Auth Routes//
 {
  path: '', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
  children: [
    { path: 'signin', loadComponent: () => import('./auth/signin/signin.component').then(m => m.SigninComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'login-2', loadComponent: () => import('./auth/login-2/login-2.component').then(m => m.Login2Component) },
    { path: 'login-3', loadComponent: () => import('./auth/login-3/login-3.component').then(m => m.Login3Component) },
    { path: 'signup', loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent) },
    { path: 'otp', loadComponent: () => import('./auth/otp/otp.component').then(m => m.OtpComponent) },
    { path: 'forgot-password', loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
    { path: 'forgot-password-2', loadComponent: () => import('./auth/forgot-password-2/forgot-password-2.component').then(m => m.ForgotPassword2Component) },
    { path: 'forgot-password-3', loadComponent: () => import('./auth/forgot-password-3/forgot-password-3.component').then(m => m.ForgotPassword3Component) },
    { path: 'password-strength', loadComponent: () => import('./auth/password-strength/password-strength.component').then(m => m.PasswordStrengthComponent) },
    { path: 'reset-password', loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
    { path: 'reset-password-2', loadComponent: () => import('./auth/reset-password-2/reset-password-2.component').then(m => m.ResetPassword2Component) },
    { path: 'reset-password-3', loadComponent: () => import('./auth/reset-password-3/reset-password-3.component').then(m => m.ResetPassword3Component) },
    { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
    { path: 'register-2', loadComponent: () => import('./auth/register-2/register-2.component').then(m => m.Register2Component) },
    { path: 'register-3', loadComponent: () => import('./auth/register-3/register-3.component').then(m => m.Register3Component) },
    { path: 'email-verification', loadComponent: () => import('./auth/email-verification/email-verification.component').then(m => m.EmailVerificationComponent) },
    { path: 'email-verification-2', loadComponent: () => import('./auth/email-verification-2/email-verification-2.component').then(m => m.EmailVerification2Component) },
    { path: 'email-verification-3', loadComponent: () => import('./auth/email-verification-3/email-verification-3.component').then(m => m.EmailVerification3Component) },
    { path: 'two-step-verification', loadComponent: () => import('./auth/two-step-verification/two-step-verification.component').then(m => m.TwoStepVerificationComponent) },
    { path: 'two-step-verification-2', loadComponent: () => import('./auth/two-step-verification-2/two-step-verification-2.component').then(m => m.TwoStepVerification2Component) },
    { path: 'two-step-verification-3', loadComponent: () => import('./auth/two-step-verification-3/two-step-verification-3.component').then(m => m.TwoStepVerification3Component) },
    { path: 'success', loadComponent: () => import('./auth/success/success.component').then(m => m.SuccessComponent) },
    { path: 'success-2', loadComponent: () => import('./auth/success-2/success-2.component').then(m => m.Success2Component) },
    { path: 'success-3', loadComponent: () => import('./auth/success-3/success-3.component').then(m => m.Success3Component) },
    { path: 'lock-screen', loadComponent: () => import('./auth/lock-screen/lock-screen.component').then(m => m.LockScreenComponent) },
    { path: 'error-404', loadComponent: () => import('./auth/error-404/error-404.component').then(m => m.Error404Component) },
    { path: 'error-500', loadComponent: () => import('./auth/error-500/error-500.component').then(m => m.Error500Component) }
  ]
}
  ,
  //Features Routes//
  { path: '', loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
    children: [
      {
        path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
          { path: 'index', loadComponent: () => import('./features/dashboard/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
          { path: 'employee', loadComponent: () => import('./features/dashboard/employee-dashboard/employee-dashboard.component').then(m => m.EmployeeDashboardComponent) },
          { path: 'deals', loadComponent: () => import('./features/dashboard/deals-dashboard/deals-dashboard.component').then(m => m.DealsDashboardComponent) },
          { path: 'leads', loadComponent: () => import('./features/dashboard/leads-dashboard/leads-dashboard.component').then(m => m.LeadsDashboardComponent) },
        ]
      },
      //Application//
      { path: 'application', loadComponent: () => import('./features/application/application.component').then(m => m.ApplicationComponent),
          children: [
            { path: 'chats', loadComponent: () => import('./features/application/chat/chat.component').then(m => m.ChatComponent) },
            { path: 'calendar', loadComponent: () => import('./features/application/calendar/calendar.component').then((m) => m.CalendarComponent),},
            { path: 'email', loadComponent: () => import('./features/application/email/email.component').then((m) => m.EmailComponent),},
            { path: 'calls/call-history', loadComponent: () => import('./features/application/call/call-history/call-history.component').then(m => m.CallHistoryComponent) },
            { path: 'calls/voice-call', loadComponent: () => import('./features/application/call/voice-call/voice-call.component').then(m => m.VoiceCallComponent) },
            { path: 'calls/video-call', loadComponent: () => import('./features/application/call/video-call/video-call.component').then(m => m.VideoCallComponent) },
            { path: 'calls/outgoing-call', loadComponent: () => import('./features/application/call/outgoing-call/outgoing-call.component').then(m => m.OutgoingCallComponent) },
            { path: 'calls/incoming-call', loadComponent: () => import('./features/application/call/incoming-call/incoming-call.component').then(m => m.IncomingCallComponent) },
            { path: 'todo', loadComponent: () => import('./features/application/todo/todo.component').then(m => m.TodoComponent) },
            { path: 'notes', loadComponent: () => import('./features/application/notes/notes.component').then(m => m.NotesComponent) },
            { path: 'todo-list', loadComponent: () => import('./features/application/todo-list/todo-list.component').then(m => m.TodoListComponent) },
            { path: 'file-manager', loadComponent: () => import('./features/application/file-manager/file-manager.component').then(m => m.FileManagerComponent) },
            { path: 'social-feed', loadComponent: () => import('./features/application/social-feed/social-feed.component').then(m => m.SocialFeedComponent) },
            { path: 'kanban-view', loadComponent: () => import('./features/application/kanban-view/kanban-view.component').then(m => m.KanbanViewComponent) },

          ]
        },
        //Super Admin//
        {path: 'super-admin', loadComponent: () => import('./features/super-admin/super-admin.component').then(m => m.SuperAdminComponent),
        children: [
            { path: 'super-admin-dashboard', loadComponent: () => import('./features/super-admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'companies', loadComponent: () => import('./features/super-admin/companies/companies.component').then(m => m.CompaniesComponent) },
            { path: 'subscriptions', loadComponent: () => import('./features/super-admin/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
            { path: 'packages', loadComponent: () => import('./features/super-admin/packages/packages.component').then(m => m.PackagesComponent) },
            { path: 'packages-grid', loadComponent: () => import('./features/super-admin/packages-grid/packages-grid.component').then(m => m.PackagesGridComponent) },
            { path: 'purchase-transaction', loadComponent: () => import('./features/super-admin/purchase-transaction/purchase-transaction.component').then(m => m.PurchaseTransactionComponent) },
            { path: 'domain', loadComponent: () => import('./features/super-admin/domain/domain.component').then(m => m.DomainComponent) }
          ]
        },
        //Projects//
        { path: 'client', loadComponent: () => import('./features/client/client.component').then(m => m.ClientComponent),
          children:[
                    { path: 'client-list', loadComponent: () => import('./features/client/client-list/client-list.component').then(m => m.ClientListComponent) },
              { path: 'client-grid', loadComponent: () => import('./features/client/client-grid/client-grid.component').then(m => m.ClientGridComponent) },
              { path: 'client-details', loadComponent: () => import('./features/client/client-details/client-details.component').then(m => m.ClientDetailsComponent) },
          ]
         },
         //pages//
         { path: 'starter', loadComponent: () => import('./features/pages/starter/starter.component').then(m => m.StarterComponent) },
          { path: 'profile', loadComponent: () => import('./features/pages/profile/profile.component').then(m => m.ProfileComponent) },
          { path: 'gallery', loadComponent: () => import('./features/pages/gallery/gallery.component').then(m => m.GalleryComponent) },
          { path: 'search-result', loadComponent: () => import('./features/pages/search-result/search-result.component').then(m => m.SearchResultComponent) },
          { path: 'timeline', loadComponent: () => import('./features/pages/timeline/timeline.component').then(m => m.TimelineComponent) },
          { path: 'pricing', loadComponent: () => import('./features/pages/pricing/pricing.component').then(m => m.PricingComponent) },

          { path: 'privacy-policy', loadComponent: () => import('./features/pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
          { path: 'terms-condition', loadComponent: () => import('./features/pages/terms-condition/terms-condition.component').then(m => m.TermsConditionComponent) },
         { path: 'api-keys', loadComponent: () => import('./features/pages/api-keys/api-keys.component').then(m => m.ApiKeysComponent) },
         

        { path:'projects',loadComponent:() => import('./features/projects/projects.component').then((m)=>m.ProjectsComponent),
          children: [
            { path: 'project-list', loadComponent: () => import('./features/projects/project-list/project-list.component').then(m => m.ProjectListComponent) },
            { path: 'project-grid', loadComponent: () => import('./features/projects/project-grid/project-grid.component').then(m => m.ProjectGridComponent) },
            { path: 'project-details', loadComponent: () => import('./features/projects/project-details/project-details.component').then(m => m.ProjectDetailsComponent) },
            { path: 'task-details', loadComponent: () => import('./features/projects/task-details/task-details.component').then(m => m.TaskDetailsComponent) },
            { path: 'tasks', loadComponent: () => import('./features/projects/tasks/tasks.component').then(m => m.TasksComponent) },
            { path: 'task-board', loadComponent: () => import('./features/projects/task-board/task-board.component').then(m => m.TaskBoardComponent) }
          ]
        },
        //Content//
        { path: 'pages', loadComponent: () => import('./features/content/pages/pages.component').then(m => m.PagesComponent) },
      { path: 'blogs', loadComponent: () => import('./features/content/blogs/blogs.component').then(m => m.BlogsComponent),
        children:[
          { path: 'all-blogs', loadComponent: () => import('./features/content/blogs/all-blogs/all-blogs.component').then(m => m.AllBlogsComponent) },
          { path: 'blog-categories', loadComponent: () => import('./features/content/blogs/blog-categories/blog-categories.component').then(m => m.BlogCategoriesComponent) },
          { path: 'blog-tags', loadComponent: () => import('./features/content/blogs/blog-tags/blog-tags.component').then(m => m.BlogTagsComponent) },
          { path: 'blog-comments', loadComponent: () => import('./features/content/blogs/blog-comments/blog-comments.component').then(m => m.BlogCommentsComponent) },
        ]
       },
      { path: 'locations', loadComponent: () => import('./features/content/locations/locations.component').then(m => m.LocationsComponent),
        children:[
          { path: 'countries', loadComponent: () => import('./features/content/locations/countries/countries.component').then(m => m.CountriesComponent) },
          { path: 'states', loadComponent: () => import('./features/content/locations/states/states.component').then(m => m.StatesComponent) },
          { path: 'cities', loadComponent: () => import('./features/content/locations/cities/cities.component').then(m => m.CitiesComponent) },
        ]
       },
      { path: 'faq', loadComponent: () => import('./features/content/faq/faq.component').then(m => m.FaqComponent) },
      { path: 'testimonials', loadComponent: () => import('./features/content/testimonials/testimonials.component').then(m => m.TestimonialsComponent) },
        //Settings//
        { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent),
          children:[
            { path: 'general-settings', loadComponent: () => import('./features/settings/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
              children:[
                { path: 'connected-apps', loadComponent: () => import('./features/settings/general-settings/connected-apps/connected-apps.component').then(m => m.ConnectedAppsComponent) },
                { path: 'notification-settings', loadComponent: () => import('./features/settings/general-settings/notification-settings/notification-settings.component').then(m => m.NotificationSettingsComponent) },
                { path: 'security-settings', loadComponent: () => import('./features/settings/general-settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
                { path: 'profile-settings', loadComponent: () => import('./features/settings/general-settings/profile-settings/profile-settings.component').then(m => m.ProfileSettingsComponent) },
              ]
             },
            { path: 'website-settings', loadComponent: () => import('./features/settings/website-settings/website-settings.component').then(m => m.WebsiteSettingsComponent),
              children:[
                { path: 'ai-settings', loadComponent: () => import('./features/settings/website-settings/ai-settings/ai-settings.component').then(m => m.AiSettingsComponent) },
                { path: 'authentication-settings', loadComponent: () => import('./features/settings/website-settings/authentication-settings/authentication-settings.component').then(m => m.AuthenticationSettingsComponent) },
                { path: 'add-language', loadComponent: () => import('./features/settings/website-settings/add-language/add-language.component').then(m => m.AddLanguageComponent) },
                { path: 'language', loadComponent: () => import('./features/settings/website-settings/language/language.component').then(m => m.LanguageComponent) },
                { path: 'language-web', loadComponent: () => import('./features/settings/website-settings/language-web/language-web.component').then(m => m.LanguageWebComponent) },
                { path: 'appearance', loadComponent: () => import('./features/settings/website-settings/appearance/appearance.component').then(m => m.AppearanceComponent) },
                { path: 'preferences', loadComponent: () => import('./features/settings/website-settings/preferences/preferences.component').then(m => m.PreferencesComponent) },
                { path: 'prefixes', loadComponent: () => import('./features/settings/website-settings/prefixes/prefixes.component').then(m => m.PrefixesComponent) },
                { path: 'localization-settings', loadComponent: () => import('./features/settings/website-settings/localization-settings/localization-settings.component').then(m => m.LocalizationSettingsComponent) },
                { path: 'seo-settings', loadComponent: () => import('./features/settings/website-settings/seo-settings/seo-settings.component').then(m => m.SeoSettingsComponent) },
                { path: 'bussiness-settings', loadComponent: () => import('./features/settings/website-settings/bussiness-settings/bussiness-settings.component').then(m => m.BussinessSettingsComponent) },

              ]
             },
            { path: 'app-settings', loadComponent: () => import('./features/settings/app-settings/app-settings.component').then(m => m.AppSettingsComponent),
              children:[
                { path: 'custom-fields', loadComponent: () => import('./features/settings/app-settings/custom-fields/custom-fields.component').then(m => m.CustomFieldsComponent) },
                { path: 'leave-type', loadComponent: () => import('./features/settings/app-settings/leave-type/leave-type.component').then(m => m.LeaveTypeComponent) },
                { path: 'invoice-settings', loadComponent: () => import('./features/settings/app-settings/invoice-settings/invoice-settings.component').then(m => m.InvoiceSettingsComponent) },
                { path: 'approval-settings', loadComponent: () => import('./features/settings/app-settings/approval-settings/approval-settings.component').then(m => m.ApprovalSettingsComponent) },
                { path: 'salary-settings', loadComponent: () => import('./features/settings/app-settings/salary-settings/salary-settings.component').then(m => m.SalarySettingsComponent) },
              ]
             },
            { path: 'system-settings', loadComponent: () => import('./features/settings/system-settings/system-settings.component').then(m => m.SystemSettingsComponent),
              children:[
                { path: 'maintenance-mode', loadComponent: () => import('./features/settings/system-settings/maintenance-mode/maintenance-mode.component').then(m => m.MaintenanceModeComponent) },
                { path: 'gdpr', loadComponent: () => import('./features/settings/system-settings/gdpr/gdpr.component').then(m => m.GdprComponent) },
                { path: 'otp-settings', loadComponent: () => import('./features/settings/system-settings/otp-settings/otp-settings.component').then(m => m.OtpSettingsComponent) },
                { path: 'sms-template', loadComponent: () => import('./features/settings/system-settings/sms-template/sms-template.component').then(m => m.SmsTemplateComponent) },
                { path: 'sms-settings', loadComponent: () => import('./features/settings/system-settings/sms-settings/sms-settings.component').then(m => m.SmsSettingsComponent) },
                { path: 'email-template', loadComponent: () => import('./features/settings/system-settings/email-template/email-template.component').then(m => m.EmailTemplateComponent) },
                { path: 'email-settings', loadComponent: () => import('./features/settings/system-settings/email-settings/email-settings.component').then(m => m.EmailSettingsComponent) },
              ]
             },
            { path: 'financial-settings', loadComponent: () => import('./features/settings/financial-settings/financial-settings.component').then(m => m.FinancialSettingsComponent),
              children:[
                { path: 'currencies', loadComponent: () => import('./features/settings/financial-settings/currencies/currencies.component').then(m => m.CurrenciesComponent) },
                { path: 'tax-rates', loadComponent: () => import('./features/settings/financial-settings/tax-rates/tax-rates.component').then(m => m.TaxRatesComponent) },
                { path: 'payment-gateways', loadComponent: () => import('./features/settings/financial-settings/payment-gateways/payment-gateways.component').then(m => m.PaymentGatewaysComponent) },

              ]
             },
            { path: 'other-settings', loadComponent: () => import('./features/settings/other-settings/other-settings.component').then(m => m.OtherSettingsComponent),
              children:[
                { path: 'clear-cache', loadComponent: () => import('./features/settings/other-settings/clear-cache/clear-cache.component').then(m => m.ClearCacheComponent) },
                { path: 'backup', loadComponent: () => import('./features/settings/other-settings/backup/backup.component').then(m => m.BackupComponent) },
                { path: 'ban-ip-address', loadComponent: () => import('./features/settings/other-settings/ban-ip-address/ban-ip-address.component').then(m => m.BanIpAddressComponent) },
                { path: 'storage-settings', loadComponent: () => import('./features/settings/other-settings/storage-settings/storage-settings.component').then(m => m.StorageSettingsComponent) },
                { path: 'cronjob', loadComponent: () => import('./features/settings/other-settings/cronjob/cronjob.component').then(m => m.CronjobComponent) },
                { path: 'cronjob-schedule', loadComponent: () => import('./features/settings/other-settings/cronjob-schedule/cronjob-schedule.component').then(m => m.CronjobScheduleComponent) },
                { path: 'custom-js', loadComponent: () => import('./features/settings/other-settings/custom-js/custom-js.component').then(m => m.CustomJsComponent) },
                { path: 'custom-css', loadComponent: () => import('./features/settings/other-settings/custom-css/custom-css.component').then(m => m.CustomCssComponent) },

              ]
             },
          ]
        },
        
        //UI Interface //
        { path: 'table', loadComponent: () => import('./features/ui-interface/table/table.component').then(m => m.TableComponent),
          children: [
            { path: 'tables-basic', loadComponent: () => import('./features/ui-interface/table/tables-basic/tables-basic.component').then(m => m.TablesBasicComponent) },
            { path: 'data-tables', loadComponent: () => import('./features/ui-interface/table/data-tables/data-tables.component').then(m => m.DataTablesComponent) }
          ]
         },
        { path: 'maps', loadComponent: () => import('./features/ui-interface/maps/maps.component').then(m => m.MapsComponent),
          children:[
            { path: 'leaflets', loadComponent: () => import('./features/ui-interface/maps/leaflet/leaflet.component').then(m => m.LeafletComponent) }
          ]
         },
        { path: 'forms', loadComponent: () => import('./features/ui-interface/forms/forms.component').then(m => m.FormsComponent),
          children: [
            { path: 'form-elements/form-basic-inputs', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-basic-inputs/form-basic-inputs.component').then(m => m.FormBasicInputsComponent) },
            { path: 'form-elements/form-checkbox-radios', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component').then(m => m.FormCheckboxRadiosComponent) },
            { path: 'form-elements/form-grid-gutters', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-grid-gutters/form-grid-gutters.component').then(m => m.FormGridGuttersComponent) },
            { path: 'form-elements/form-elements', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-elements/form-elements.component').then(m => m.FormElementsComponent) },
            { path: 'form-elements/form-fileupload', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-fileupload/form-fileupload.component').then(m => m.FormFileuploadComponent) },
            { path: 'form-elements/form-input-groups', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-input-groups/form-input-groups.component').then(m => m.FormInputGroupsComponent) },
            { path: 'form-elements/form-select', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-select/form-select.component').then(m => m.FormSelectComponent) },
            { path: 'form-elements/form-mask', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-mask/form-mask.component').then(m => m.FormMaskComponent) },
            { path: 'layouts/form-floating-labels', loadComponent: () => import('./features/ui-interface/forms/layouts/form-floating-labels/form-floating-labels.component').then(m => m.FormFloatingLabelsComponent) },
            { path: 'layouts/form-horizontal', loadComponent: () => import('./features/ui-interface/forms/layouts/form-horizontal/form-horizontal.component').then(m => m.FormHorizontalComponent) },
            { path: 'layouts/form-vertical', loadComponent: () => import('./features/ui-interface/forms/layouts/form-vertical/form-vertical.component').then(m => m.FormVerticalComponent) },
            { path: 'form-validation', loadComponent: () => import('./features/ui-interface/forms/form-validation/form-validation.component').then(m => m.FormValidationComponent) },
            { path: 'form-pickers', loadComponent: () => import('./features/ui-interface/forms/form-pickers/form-pickers.component').then(m => m.FormPickersComponent) },
          ]
         },
        { path: 'icon', loadComponent: () => import('./features/ui-interface/icons/icons.component').then(m => m.IconsComponent),
          children: [
                { path: 'icon-fontawesome', loadComponent: () => import('./features/ui-interface/icons/icon-fontawesome/icon-fontawesome.component').then(m => m.IconFontawesomeComponent) },
                { path: 'icon-feather', loadComponent: () => import('./features/ui-interface/icons/icon-feather/icon-feather.component').then(m => m.IconFeatherComponent) },
                { path: 'icon-ionic', loadComponent: () => import('./features/ui-interface/icons/icon-ionic/icon-ionic.component').then(m => m.IconIonicComponent) },
                { path: 'icon-material', loadComponent: () => import('./features/ui-interface/icons/icon-material/icon-material.component').then(m => m.IconMaterialComponent) },
                { path: 'icon-pe7', loadComponent: () => import('./features/ui-interface/icons/icon-pe7/icon-pe7.component').then(m => m.IconPe7Component) },
                { path: 'icon-simpleline', loadComponent: () => import('./features/ui-interface/icons/icon-simpleline/icon-simpleline.component').then(m => m.IconSimplelineComponent) },
                { path: 'icon-themify', loadComponent: () => import('./features/ui-interface/icons/icon-themify/icon-themify.component').then(m => m.IconThemifyComponent) },
                { path: 'icon-weather', loadComponent: () => import('./features/ui-interface/icons/icon-weather/icon-weather.component').then(m => m.IconWeatherComponent) },
                { path: 'icon-typicon', loadComponent: () => import('./features/ui-interface/icons/icon-typicon/icon-typicon.component').then(m => m.IconTypiconComponent) },
                { path: 'icon-flag', loadComponent: () => import('./features/ui-interface/icons/icon-flag/icon-flag.component').then(m => m.IconFlagComponent) },
                { path: 'icon-bootstrap', loadComponent: () => import('./features/ui-interface/icons/icon-bootstrap/icon-bootstrap.component').then(m => m.IconBootstrapComponent) },
                { path: 'icon-remix', loadComponent: () => import('./features/ui-interface/icons/icon-remix/icon-remix.component').then(m => m.IconRemixComponent) },
                { path: 'icon-tabler', loadComponent: () => import('./features/ui-interface/icons/icon-tabler/icon-tabler.component').then(m => m.IconTablerComponent) }
              ]

         },
        { path: 'charts', loadComponent: () => import('./features/ui-interface/charts/charts.component').then(m => m.ChartsComponent),
          children:[
              { path: 'prime-ng', loadComponent: () => import('./features/ui-interface/charts/prime-ng/prime-ng.component').then(m => m.PrimeNgComponent) },
              { path: 'apex-charts', loadComponent: () => import('./features/ui-interface/charts/chart-apex/chart-apex.component').then(m => m.ChartApexComponent) }
          ]
         },
        { path: 'base-ui', loadComponent: () => import('./features/ui-interface/base-ui/base-ui.component').then(m => m.BaseUiComponent),
          children: [
              { path: 'ui-spinner', loadComponent: () => import('./features/ui-interface/base-ui/ui-spinner/ui-spinner.component').then(m => m.UiSpinnerComponent) },
              { path: 'ui-rangeslider', loadComponent: () => import('./features/ui-interface/base-ui/ui-rangeslider/ui-rangeslider.component').then(m => m.UiRangesliderComponent) },
              { path: 'ui-progress', loadComponent: () => import('./features/ui-interface/base-ui/ui-progress/ui-progress.component').then(m => m.UiProgressComponent) },
              { path: 'ui-video', loadComponent: () => import('./features/ui-interface/base-ui/ui-video/ui-video.component').then(m => m.UiVideoComponent) },
              { path: 'ui-typography', loadComponent: () => import('./features/ui-interface/base-ui/ui-typography/ui-typography.component').then(m => m.UiTypographyComponent) },
              { path: 'ui-carousel', loadComponent: () => import('./features/ui-interface/base-ui/ui-carousel/ui-carousel.component').then(m => m.UiCarouselComponent) },
              { path: 'ui-cards', loadComponent: () => import('./features/ui-interface/base-ui/ui-cards/ui-cards.component').then(m => m.UiCardsComponent) },
              { path: 'ui-buttons-group', loadComponent: () => import('./features/ui-interface/base-ui/ui-buttons-group/ui-buttons-group.component').then(m => m.UiButtonsGroupComponent) },
              { path: 'ui-buttons', loadComponent: () => import('./features/ui-interface/base-ui/ui-buttons/ui-buttons.component').then(m => m.UiButtonsComponent) },
              { path: 'ui-breadcrumb', loadComponent: () => import('./features/ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb.component').then(m => m.UiBreadcrumbComponent) },
              { path: 'ui-borders', loadComponent: () => import('./features/ui-interface/base-ui/ui-borders/ui-borders.component').then(m => m.UiBordersComponent) },
              { path: 'ui-badges', loadComponent: () => import('./features/ui-interface/base-ui/ui-badges/ui-badges.component').then(m => m.UiBadgesComponent) },
              { path: 'ui-accordion', loadComponent: () => import('./features/ui-interface/base-ui/ui-accordion/ui-accordion.component').then(m => m.UiAccordionComponent) },
              { path: 'ui-alerts', loadComponent: () => import('./features/ui-interface/base-ui/ui-alerts/ui-alerts.component').then(m => m.UiAlertsComponent) },
              { path: 'ui-avatar', loadComponent: () => import('./features/ui-interface/base-ui/ui-avatar/ui-avatar.component').then(m => m.UiAvatarComponent) },
              { path: 'ui-popovers', loadComponent: () => import('./features/ui-interface/base-ui/ui-popovers/ui-popovers.component').then(m => m.UiPopoversComponent) },
              { path: 'ui-placeholders', loadComponent: () => import('./features/ui-interface/base-ui/ui-placeholders/ui-placeholders.component').then(m => m.UiPlaceholdersComponent) },
              { path: 'ui-pagination', loadComponent: () => import('./features/ui-interface/base-ui/ui-pagination/ui-pagination.component').then(m => m.UiPaginationComponent) },
              { path: 'ui-offcanvas', loadComponent: () => import('./features/ui-interface/base-ui/ui-offcanvas/ui-offcanvas.component').then(m => m.UiOffcanvasComponent) },
              { path: 'ui-nav-tabs', loadComponent: () => import('./features/ui-interface/base-ui/ui-nav-tabs/ui-nav-tabs.component').then(m => m.UiNavTabsComponent) },
              { path: 'ui-modals', loadComponent: () => import('./features/ui-interface/base-ui/ui-modals/ui-modals.component').then(m => m.UiModalsComponent) },
              { path: 'ui-media', loadComponent: () => import('./features/ui-interface/base-ui/ui-media/ui-media.component').then(m => m.UiMediaComponent) },
              { path: 'ui-lightbox', loadComponent: () => import('./features/ui-interface/base-ui/ui-lightbox/ui-lightbox.component').then(m => m.UiLightboxComponent) },
              { path: 'ui-images', loadComponent: () => import('./features/ui-interface/base-ui/ui-images/ui-images.component').then(m => m.UiImagesComponent) },
              { path: 'ui-grid', loadComponent: () => import('./features/ui-interface/base-ui/ui-grid/ui-grid.component').then(m => m.UiGridComponent) },
              { path: 'ui-tooltips', loadComponent: () => import('./features/ui-interface/base-ui/ui-tooltips/ui-tooltips.component').then(m => m.UiTooltipsComponent) },
              { path: 'ui-toasts', loadComponent: () => import('./features/ui-interface/base-ui/ui-toasts/ui-toasts.component').then(m => m.UiToastsComponent) },
              { path: 'ui-dropdowns', loadComponent: () => import('./features/ui-interface/base-ui/ui-dropdowns/ui-dropdowns.component').then(m => m.UiDropdownsComponent) },
              { path: 'ui-colors', loadComponent: () => import('./features/ui-interface/base-ui/ui-colors/ui-colors.component').then(m => m.UiColorsComponent) },
              { path: 'ui-sortable', loadComponent: () => import('./features/ui-interface/base-ui/ui-sortable/ui-sortable.component').then(m => m.UiSortableComponent) }
            ]

         },
        { path: 'advanced-ui', loadComponent: () => import('./features/ui-interface/advanced-ui/advanced-ui.component').then(m => m.AdvancedUiComponent),
          children: [
              { path: 'ui-timeline', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-timeline/ui-timeline.component').then(m => m.UiTimelineComponent) },
              { path: 'ui-text-editor', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-text-editor/ui-text-editor.component').then(m => m.UiTextEditorComponent) },
              { path: 'ui-scrollbar', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component').then(m => m.UiScrollbarComponent) },
              { path: 'ui-ribbon', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-ribbon/ui-ribbon.component').then(m => m.UiRibbonComponent) },
              { path: 'ui-rating', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-rating/ui-rating.component').then(m => m.UiRatingComponent) },
              { path: 'ui-drag-drop', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-drag-drop/ui-drag-drop.component').then(m => m.UiDragDropComponent) },
              { path: 'ui-counter', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-counter/ui-counter.component').then(m => m.UiCounterComponent) },
              { path: 'ui-clipboard', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-clipboard/ui-clipboard.component').then(m => m.UiClipboardComponent) },
              { path: 'ui-stickynote', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-stickynote/ui-stickynote.component').then(m => m.UiStickynoteComponent) }
            ]
         },
           //Layout//
           { path: 'layout-horizontal', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-detached', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-modern', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-two-column', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-hovered', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-boxed', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-horizontal-single', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-horizontal-overlay', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-horizontal-box', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-horizontal-sidemenu', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-vertical-transparent', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-without-header', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-default', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-rtl', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
{ path: 'layout-dark', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
 
       { path: 'crm' , loadComponent: () => import('./features/crm/crm.component').then(m => m.CrmComponent),
        children: [ 
          {path: 'contact/contacts-list', loadComponent: () => import('./features/crm/contacts-list/contacts-list.component').then(m => m.ContactsListComponent),},
          {path: 'contact/contacts-grid', loadComponent: () => import('./features/crm/contacts-grid/contacts-grid.component').then(m => m.ContactsGridComponent),},
          {path: 'contact/contacts-details', loadComponent: () => import('./features/crm/contacts-details/contacts-details.component').then(m => m.ContactsDetailsComponent),},
          {path: 'activity', loadComponent: () => import('./features/crm/activity/activity.component').then(m => m.ActivityComponent),},
          {path: 'analytics', loadComponent: () => import('./features/crm/analytics/analytics.component').then(m => m.AnalyticsComponent),},
          {path: 'pipeline', loadComponent: () => import('./features/crm/pipeline/pipeline.component').then(m => m.PipelineComponent),},
          {path: 'leads/leads-list', loadComponent: () => import('./features/crm/leads-list/leads-list.component').then(m => m.LeadsListComponent),},
          {path: 'leads/leads-grid', loadComponent: () => import('./features/crm/leads-grid/leads-grid.component').then(m => m.LeadsGridComponent),},
          {path: 'leads/leads-details', loadComponent: () => import('./features/crm/leads-details/leads-details.component').then(m => m.LeadsDetailsComponent),},
          {path: 'deals/deals-list', loadComponent: () => import('./features/crm/deals-list/deals-list.component').then(m => m.DealsListComponent),},
          {path: 'deals/deals-grid', loadComponent: () => import('./features/crm/deals-grid/deals-grid.component').then(m => m.DealsGridComponent),},
          {path: 'deals/deals-details', loadComponent: () => import('./features/crm/deals-details/deals-details.component').then(m => m.DealsDetailsComponent),},
          {path: 'company/companies-grid', loadComponent: () => import('./features/crm/companies-grid/companies-grid.component').then(m => m.CompaniesGridComponent),},
          {path: 'company/companies-list', loadComponent: () => import('./features/crm/companies/companies.component').then(m => m.CompaniesComponent),},
          {path: 'company/company-details', loadComponent: () => import('./features/crm/company-details/company-details.component').then(m => m.CompanyDetailsComponent),},
        ]
      },
      {
        path: 'employees' , loadComponent: () => import('./features/hrm/employees/employees.component').then(m => m.EmployeesComponent),
        children: [
          {path: 'employee-list', loadComponent: () => import('./features/hrm/employees/employee-list/employee-list.component').then(m => m.EmployeeListComponent),},
          {path: 'employee-grid', loadComponent: () => import('./features/hrm/employees/employee-grid/employee-grid.component').then(m => m.EmployeeGridComponent),},
          {path: 'employee-details', loadComponent: () => import('./features/hrm/employees/employee-details/employee-details.component').then(m => m.EmployeeDetailsComponent),},
          {path: 'departments', loadComponent: () => import('./features/hrm/employees/departments/departments.component').then(m => m.DepartmentsComponent),},
          {path: 'designations', loadComponent: () => import('./features/hrm/employees/designations/designations.component').then(m => m.DesignationsComponent),},
          {path: 'policy', loadComponent: () => import('./features/hrm/employees/policy/policy.component').then(m => m.PolicyComponent),},
        ]
      },
      {
        path: 'tickets' , loadComponent: () => import('./features/hrm/tickets/tickets.component').then(m => m.TicketsComponent),
        children: [
          {path: 'ticket-grid', loadComponent: () => import('./features/hrm/tickets/ticket-grid/ticket-grid.component').then(m => m.TicketGridComponent),},
          {path: 'ticket-list', loadComponent: () => import('./features/hrm/tickets/ticket/ticket.component').then(m => m.TicketComponent),},
          {path: 'ticket-details', loadComponent: () => import('./features/hrm/tickets/ticket-details/ticket-details.component').then(m => m.TicketDetailsComponent),},
        ]
      },
      {
        path: 'holidays' , loadComponent: () => import('./features/hrm/holidays/holidays.component').then(m => m.HolidaysComponent),
      },
      {
        path: 'attendance' , loadComponent: () => import('./features/hrm/attendance/attendance.component').then(m => m.AttendanceComponent),
        children: [
          {path: 'attendance-admin', loadComponent: () => import('./features/hrm/attendance/attendance-admin/attendance-admin.component').then(m => m.AttendanceAdminComponent),},
          {path: 'attendance-employee', loadComponent: () => import('./features/hrm/attendance/attendance-employee/attendance-employee.component').then(m => m.AttendanceEmployeeComponent),},
          {path: 'overtime', loadComponent: () => import('./features/hrm/attendance/overtime/overtime.component').then(m => m.OvertimeComponent),},
          {path: 'shift-schedule', loadComponent: () => import('./features/hrm/attendance/shift-schedule/shift-schedule.component').then(m => m.ShiftScheduleComponent),},
          {path: 'timesheet', loadComponent: () => import('./features/hrm/attendance/timesheet/timesheet.component').then(m => m.TimesheetComponent),},
          {path: 'leaves', loadComponent: () => import('./features/hrm/attendance/leaves/leaves.component').then(m => m.LeavesComponent),
            children: [
              {path: 'leave-admin', loadComponent: () => import('./features/hrm/attendance/leaves/leave-admin/leave-admin.component').then(m => m.LeaveAdminComponent),},
              {path: 'leave-employee', loadComponent: () => import('./features/hrm/attendance/leaves/leave-employee/leave-employee.component').then(m => m.LeaveEmployeeComponent),},
              {path: 'leave-settings', loadComponent: () => import('./features/hrm/attendance/leaves/leave-settings/leave-settings.component').then(m => m.LeaveSettingsComponent),},
            ]
          },
        ]
      },
      {
        path: 'performance' , loadComponent: () => import('./features/hrm/performance/performance.component').then(m => m.PerformanceComponent),
        children: [
          {path: 'performance-appraisal', loadComponent: () => import('./features/hrm/performance/performance-appraisal/performance-appraisal.component').then(m => m.PerformanceAppraisalComponent),},
          {path: 'performance-indicator', loadComponent: () => import('./features/hrm/performance/performance-indicator/performance-indicator.component').then(m => m.PerformanceIndicatorComponent),},
          {path: 'performance-review', loadComponent: () => import('./features/hrm/performance/performance-review/performance-review.component').then(m => m.PerformanceReviewComponent),},
          {path: 'goal-tracking', loadComponent: () => import('./features/hrm/performance/goal-tracking/goal-tracking.component').then(m => m.GoalTrackingComponent),},
          {path: 'goal-type', loadComponent: () => import('./features/hrm/performance/goal-type/goal-type.component').then(m => m.GoalTypeComponent),},
        ]
      },
      {
        path: 'trainings' , loadComponent: () => import('./features/hrm/trainings/trainings.component').then(m => m.TrainingsComponent),
        children: [
          {path: 'training-list', loadComponent: () => import('./features/hrm/trainings/training-list/training-list.component').then(m => m.TrainingListComponent),},
          {path: 'trainers', loadComponent: () => import('./features/hrm/trainings/trainers/trainers.component').then(m => m.TrainersComponent),},
          {path: 'training-type', loadComponent: () => import('./features/hrm/trainings/training-type/training-type.component').then(m => m.TrainingTypeComponent),},
        ]
      },
      { path: 'promotion' , loadComponent: () => import('./features/hrm/promotion/promotion.component').then(m => m.PromotionComponent),},
      { path: 'resignation' , loadComponent: () => import('./features/hrm/resignation/resignation.component').then(m => m.ResignationComponent),},
      { path: 'termination' , loadComponent: () => import('./features/hrm/termination/termination.component').then(m => m.TerminationComponent),},
      { path: 'candidates' , loadComponent: () => import('./features/recruitment/candidates/candidates.component').then(m => m.CandidatesComponent),
        children: [
          {path: 'candidates-list', loadComponent: () => import('./features/recruitment/candidates/candidates-list/candidates-list.component').then(m => m.CandidatesListComponent),},
          {path: 'candidates-grid', loadComponent: () => import('./features/recruitment/candidates/candidates-grid/candidates-grid.component').then(m => m.CandidatesGridComponent),},
          {path: 'candidates-kanban', loadComponent: () => import('./features/recruitment/candidates/candidates-kanban/candidates-kanban.component').then(m => m.CandidatesKanbanComponent),},
        ]
      },
      { path: 'jobs' , loadComponent: () => import('./features/recruitment/jobs/jobs.component').then(m => m.JobsComponent),
        children: [
          {path: 'jobs-list', loadComponent: () => import('./features/recruitment/jobs/jobs-list/jobs-list.component').then(m => m.JobsListComponent),},
          {path: 'jobs-grid', loadComponent: () => import('./features/recruitment/jobs/jobs-grid/jobs-grid.component').then(m => m.JobsGridComponent),},
        ]
      },
      { path: 'candidates' , loadComponent: () => import('./features/recruitment/candidates/candidates.component').then(m => m.CandidatesComponent),
        children: [
          {path: 'candidates-list', loadComponent: () => import('./features/recruitment/candidates/candidates-list/candidates-list.component').then(m => m.CandidatesListComponent),},
          {path: 'candidates-grid', loadComponent: () => import('./features/recruitment/candidates/candidates-grid/candidates-grid.component').then(m => m.CandidatesGridComponent),},
          {path: 'candidates-kanban', loadComponent: () => import('./features/recruitment/candidates/candidates-kanban/candidates-kanban.component').then(m => m.CandidatesKanbanComponent),},
        ]
      },
      {path: 'refferals',loadComponent: () => import('./features/recruitment/refferals/refferals.component').then(m => m.RefferalsComponent),},
      { path: 'accounting' , loadComponent: () => import('./features/finance/accounting/accounting.component').then(m => m.AccountingComponent),
        children: [
          {path: 'budgets', loadComponent: () => import('./features/finance/accounting/budgets/budgets.component').then(m => m.BudgetsComponent),},
          {path: 'categories', loadComponent: () => import('./features/finance/accounting/categories/categories.component').then(m => m.CategoriesComponent),},
          {path: 'budget-expenses', loadComponent: () => import('./features/finance/accounting/budget-expenses/budget-expenses.component').then(m => m.BudgetExpensesComponent),},
          {path: 'budget-revenues', loadComponent: () => import('./features/finance/accounting/budget-revenues/budget-revenues.component').then(m => m.BudgetRevenuesComponent),},
        ]
      },
      { path: 'sales' , loadComponent: () => import('./features/finance/sales/sales.component').then(m => m.SalesComponent),
        children: [
          {path: 'invoices', loadComponent: () => import('./features/finance/sales/invoices/invoices.component').then(m => m.InvoicesComponent),},
          {path: 'invoices-details', loadComponent: () => import('./features/finance/sales/invoices-details/invoices-details.component').then(m => m.InvoicesDetailsComponent),},
          {path: 'add-invoice', loadComponent: () => import('./features/finance/sales/add-invoice/add-invoice.component').then(m => m.AddInvoiceComponent),},
          {path: 'edit-invoice', loadComponent: () => import('./features/finance/sales/edit-invoice/edit-invoice.component').then(m => m.EditInvoiceComponent),},
          {path: 'estimates', loadComponent: () => import('./features/finance/sales/estimates/estimates.component').then(m => m.EstimatesComponent),},
          {path: 'expenses', loadComponent: () => import('./features/finance/sales/expenses/expenses.component').then(m => m.ExpensesComponent),},
          {path: 'payments', loadComponent: () => import('./features/finance/sales/payments/payments.component').then(m => m.PaymentsComponent),},
          {path: 'provident-fund', loadComponent: () => import('./features/finance/sales/provident-fund/provident-fund.component').then(m => m.ProvidentFundComponent),},
          {path: 'taxes', loadComponent: () => import('./features/finance/sales/taxes/taxes.component').then(m => m.TaxesComponent),},
        ]
      },
      { path: 'payroll' , loadComponent: () => import('./features/finance/payroll/payroll.component').then(m => m.PayrollComponent),
        children: [
          {path: 'payroll-items', loadComponent: () => import('./features/finance/payroll/payroll-items/payroll-items.component').then(m => m.PayrollItemsComponent),},
          {path: 'payroll-deduction', loadComponent: () => import('./features/finance/payroll/payroll-deduction/payroll-deduction.component').then(m => m.PayrollDeductionComponent),},
          {path: 'payroll-overtime', loadComponent: () => import('./features/finance/payroll/payroll-overtime/payroll-overtime.component').then(m => m.PayrollOvertimeComponent),},
          {path: 'employee-salary', loadComponent: () => import('./features/finance/payroll/employee-salary/employee-salary.component').then(m => m.EmployeeSalaryComponent),},
          {path: 'payslip', loadComponent: () => import('./features/finance/payroll/payslip/payslip.component').then(m => m.PayslipComponent),},
        ]
      },
      { path: 'assets' , loadComponent: () => import('./features/administration/assets/assets.component').then(m => m.AssetsComponent),
        children: [
          {path: 'asset-list', loadComponent: () => import('./features/administration/assets/asset-list/asset-list.component').then(m => m.AssetListComponent),},
          {path: 'asset-categories', loadComponent: () => import('./features/administration/assets/asset-categories/asset-categories.component').then(m => m.AssetCategoriesComponent),},
        ]
      },
      { path: 'reports' , loadComponent: () => import('./features/administration/reports/reports.component').then(m => m.ReportsComponent),
        children: [
          {path: 'task-report', loadComponent: () => import('./features/administration/reports/task-report/task-report.component').then(m => m.TaskReportComponent),},
          {path: 'user-report', loadComponent: () => import('./features/administration/reports/user-report/user-report.component').then(m => m.UserReportComponent),},
          {path: 'project-report', loadComponent: () => import('./features/administration/reports/project-report/project-report.component').then(m => m.ProjectReportComponent),},
          {path: 'attendance-report', loadComponent: () => import('./features/administration/reports/attendance-report/attendance-report.component').then(m => m.AttendanceReportComponent),},
          {path: 'daily-report', loadComponent: () => import('./features/administration/reports/daily-report/daily-report.component').then(m => m.DailyReportComponent),},
          {path: 'employee-report', loadComponent: () => import('./features/administration/reports/employee-report/employee-report.component').then(m => m.EmployeeReportComponent),},
          {path: 'expenses-report', loadComponent: () => import('./features/administration/reports/expenses-report/expenses-report.component').then(m => m.ExpensesReportComponent),},
          {path: 'invoice-report', loadComponent: () => import('./features/administration/reports/invoice-report/invoice-report.component').then(m => m.InvoiceReportComponent),},
          {path: 'leave-report', loadComponent: () => import('./features/administration/reports/leave-report/leave-report.component').then(m => m.LeaveReportComponent),},
          {path: 'payment-report', loadComponent: () => import('./features/administration/reports/payment-report/payment-report.component').then(m => m.PaymentReportComponent),},
          {path: 'payslip-report', loadComponent: () => import('./features/administration/reports/payslip-report/payslip-report.component').then(m => m.PayslipReportComponent),},
        ]
      },
      { path: 'support' , loadComponent: () => import('./features/administration/support/support.component').then(m => m.SupportComponent),
        children: [
          {path: 'knowledgebase', loadComponent: () => import('./features/administration/support/knowledgebase/knowledgebase.component').then(m => m.KnowledgebaseComponent),},
          {path: 'knowledgebase-details', loadComponent: () => import('./features/administration/support/knowledgebase-details/knowledgebase-details.component').then(m => m.KnowledgebaseDetailsComponent),},
          {path: 'knowledgebase-view', loadComponent: () => import('./features/administration/support/knowledgebase-view/knowledgebase-view.component').then(m => m.KnowledgebaseViewComponent),},
        ]
      },
      { path: 'user-management' , loadComponent: () => import('./features/administration/user-management/user-management.component').then(m => m.UserManagementComponent),
        children: [
          {path: 'users', loadComponent: () => import('./features/administration/user-management/users/users.component').then(m => m.UsersComponent),},
          {path: 'roles-permissions', loadComponent: () => import('./features/administration/user-management/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent),},
          {path: 'permissions', loadComponent: () => import('./features/administration/user-management/permissions/permissions.component').then(m => m.PermissionsComponent),},
        ]
      },

    ]

  },
  { path: 'coming-soon', loadComponent: () => import('./features/pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },
  { path: 'under-maintenance', loadComponent: () => import('./features/pages/under-maintenance/under-maintenance.component').then(m => m.UnderMaintenanceComponent) },
  { path: 'under-construction', loadComponent: () => import('./features/pages/under-construction/under-construction.component').then(m => m.UnderConstructionComponent) },

  {
    path:"**",
    redirectTo:'/error-404'  ,
    pathMatch:'full'
  }
  




 

]as const;
