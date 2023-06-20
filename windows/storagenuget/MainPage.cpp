#include "pch.h"
#include "MainPage.h"
#if __has_include("MainPage.g.cpp")
#include "MainPage.g.cpp"



#endif

#include "App.h"

using namespace winrt;
using namespace xaml;
using namespace Windows::UI;
using namespace Windows::UI::ViewManagement;
using namespace Windows::ApplicationModel::Core;

namespace winrt::storagenuget::implementation
{
    MainPage::MainPage()
    {
        InitializeComponent();
        auto titleBar = ApplicationView::GetForCurrentView().TitleBar();


        titleBar.BackgroundColor(ColorHelper::FromArgb(239,243,249,255));
        titleBar.ForegroundColor(ColorHelper::FromArgb(0, 0, 0, 1));
        titleBar.InactiveBackgroundColor(ColorHelper::FromArgb(255, 135, 141, 199));
        titleBar.InactiveForegroundColor(ColorHelper::FromArgb(255, 232, 211, 162));

        // Title bar button background colors. Alpha is respected when the view is extended
        // into the title bar (see scenario 2). Otherwise, Alpha is ignored and treated as if it were 255.
        uint8_t buttonAlpha = 255;
        titleBar.ButtonBackgroundColor(ColorHelper::FromArgb(239,243,249,255));
        titleBar.ButtonHoverBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 19, 21, 40));
        titleBar.ButtonPressedBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 232, 211, 162));
        titleBar.ButtonInactiveBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 135, 141, 199));

        // Title bar button foreground colors. Alpha must be 255.
        titleBar.ButtonForegroundColor(ColorHelper::FromArgb(255, 232, 211, 162));
        titleBar.ButtonHoverForegroundColor(ColorHelper::FromArgb(255, 255, 255, 255));
        titleBar.ButtonPressedForegroundColor(ColorHelper::FromArgb(255, 54, 60, 116));
        titleBar.ButtonInactiveForegroundColor(ColorHelper::FromArgb(255, 232, 211, 162));
        
        CoreApplication::GetCurrentView().TitleBar().ExtendViewIntoTitleBar(true);


        // Title bar button background colors. Alpha is respected when the view is extended
        // into the title bar (see scenario 2). Otherwise, Alpha is ignored and treated as if it were 255.
        // uint8_t buttonAlpha = (uint8_t)(TransparentWhenExtended().IsChecked().Value() ? 0 : 255);
        // titleBar.ButtonBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 54, 60, 116));
        // titleBar.ButtonHoverBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 19, 21, 40));
        // titleBar.ButtonPressedBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 232, 211, 162));
        // titleBar.ButtonInactiveBackgroundColor(ColorHelper::FromArgb(buttonAlpha, 135, 141, 199));

        auto app = Application::Current().as<App>();
        ReactRootView().ReactNativeHost(app->Host());
    }
}
