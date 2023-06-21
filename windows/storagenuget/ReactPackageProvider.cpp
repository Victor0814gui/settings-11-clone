#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"

// #include "FilePicker.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::storagenuget::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder);
}

} // namespace winrt::storagenuget::implementation
