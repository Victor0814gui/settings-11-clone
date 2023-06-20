#pragma once
#include "MainPage.g.h"
#include <winrt/Microsoft.ReactNative.h>

namespace winrt::storagenuget::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();
        Windows::UI::ViewManagement::ApplicationViewTitleBar TitleBar()
        {
            return titleBar;
        }
        private:
            Windows::UI::ViewManagement::ApplicationViewTitleBar titleBar{ nullptr };
    };
    
}

namespace winrt::storagenuget::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {        
    };
}

