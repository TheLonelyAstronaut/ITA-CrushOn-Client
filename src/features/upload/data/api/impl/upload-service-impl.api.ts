import { AxiosResponse } from 'axios';

import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { PhotoPicker } from '../../../../../core/util/upload.util';
import { UploadService } from '../upload-service.api';

class UploadServiceImpl implements UploadService {
    constructor(private coreApi: CoreAPIClient) {}

    uploadPhoto = async (photo: PhotoPicker): Promise<AxiosResponse<number>> => {
        const formdata = new FormData();

        formdata.append('file', {
            // eslint-disable-next-line
            // @ts-ignore
            uri: photo.path as string,
            name: 'photo_' + Date.now() + '.jpg',
            type: photo.mime,
        });

        return this.coreApi.sendFile('api/v1/upload', formdata);
    };
}

export const uploadService: UploadService = new UploadServiceImpl(coreAPIClient);
