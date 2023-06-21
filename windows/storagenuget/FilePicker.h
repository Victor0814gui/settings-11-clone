// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "pch.h"
#include <string>

using namespace std;
using namespace winrt;
using namespace Windows::Foundation;
using namespace Windows::Storage;
using namespace Windows::Storage::Pickers;
using namespace Windows::UI::Xaml;

REACT_MODULE(FilePicker);
struct FilePicker
{
    REACT_METHOD(SingleFileAsync, L"singleFileAsync");
    void  SingleFileAsync() noexcept
    {
        FileOpenPicker openPicker;
        openPicker.ViewMode(PickerViewMode::Thumbnail);
        openPicker.SuggestedStartLocation(PickerLocationId::PicturesLibrary);
        openPicker.FileTypeFilter().ReplaceAll({ L".jpg", L".jpeg", L".png" });
        StorageFile file = co_await openPicker.PickSingleFileAsync();
        if (file != nullptr)
        {
          AddEvent(file.Name());
        }         
    }    

    REACT_EVENT(AddEvent);
    std::function<void(std::string)> AddEvent;
};